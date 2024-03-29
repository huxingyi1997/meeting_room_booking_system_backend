import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { Like, Repository } from 'typeorm';

import { RedisService } from 'src/redis/redis.service';
import { EmailService } from 'src/email/email.service';
import { MinioService } from 'src/minio/minio.service';
import { User } from './entities/user.entity';
import { RegisterUserDto } from './dto/register-user.dto';
import { md5 } from 'src/utils';
import { Role } from './entities/role.entity';
import { Permission } from './entities/permission.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { LoginUserVo } from './vo/login-user.vo';
import { RefreshTokenVo } from './vo/refresh-token.vo';
import { UserDetailVo } from './vo/user-info.vo';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserListVo } from './vo/user-list.vo';
import { UserListDto } from './dto/user-list.dto';

@Injectable()
export class UserService {
  private logger = new Logger();

  constructor(
    @Inject(RedisService)
    private redisService: RedisService,

    @Inject(EmailService)
    private emailService: EmailService,

    @Inject(ConfigService)
    private configService: ConfigService,

    @Inject(JwtService)
    private jwtService: JwtService,

    @Inject(MinioService)
    private minioService: MinioService,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Role)
    private roleRepository: Repository<Role>,

    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
  ) {}

  async register(user: RegisterUserDto) {
    const captcha = await this.redisService.get(`captcha_${user.email}`);

    if (!captcha) {
      throw new HttpException('captcha is invalid', HttpStatus.BAD_REQUEST);
    }

    if (user.captcha !== captcha) {
      throw new HttpException('captcha is not correct', HttpStatus.BAD_REQUEST);
    }

    const foundUser = await this.userRepository.findOneBy({
      username: user.username,
    });

    if (foundUser) {
      throw new HttpException('user has existed', HttpStatus.BAD_REQUEST);
    }

    const newUser = new User();
    newUser.username = user.username;
    newUser.password = md5(user.password);
    newUser.email = user.email;
    newUser.nickName = user.nickName;

    try {
      await this.userRepository.save(newUser);
      return 'register success';
    } catch (e) {
      this.logger.error(e, UserService);
      return 'register fail';
    }
  }

  async registerCaptcha(address: string) {
    const code = Math.random().toString().slice(2, 8);

    await this.redisService.set(`captcha_${address}`, code, 5 * 60);

    await this.emailService.sendMail({
      to: address,
      subject: 'register captcha',
      html: `<p>your register captcha is ${code}</p>`,
    });
    return 'send email success';
  }

  async initData() {
    const user1 = new User();
    user1.username = 'zhangsan';
    user1.password = md5('111111');
    user1.email = 'xxx@xx.com';
    user1.isAdmin = true;
    user1.nickName = '张三';
    user1.phoneNumber = '13233323333';

    const user2 = new User();
    user2.username = 'lisi';
    user2.password = md5('222222');
    user2.email = 'yy@yy.com';
    user2.nickName = '李四';

    const role1 = new Role();
    role1.name = '管理员';

    const role2 = new Role();
    role2.name = '普通用户';

    const permission1 = new Permission();
    permission1.code = 'ccc';
    permission1.description = '访问 ccc 接口';

    const permission2 = new Permission();
    permission2.code = 'ddd';
    permission2.description = '访问 ddd 接口';

    user1.roles = [role1];
    user2.roles = [role2];

    role1.permissions = [permission1, permission2];
    role2.permissions = [permission1];

    await this.permissionRepository.save([permission1, permission2]);
    await this.roleRepository.save([role1, role2]);
    await this.userRepository.save([user1, user2]);

    return 'done';
  }

  async login(
    loginUserDto: LoginUserDto,
    isAdmin: boolean,
  ): Promise<LoginUserVo> {
    const user = await this.findLoginUser(loginUserDto, isAdmin);

    const vo = this.transformUserToLoginUserVo(user);

    vo.accessToken = this.jwtService.sign(
      {
        userId: vo.userInfo.id,
        username: vo.userInfo.username,
        email: vo.userInfo.email,
        roles: vo.userInfo.roles,
        permissions: vo.userInfo.permissions,
      },
      {
        expiresIn: this.configService.get<string>(
          'JWT_ACCESS_TOKEN_EXPIRES_TIME',
        ),
      },
    );

    vo.refreshToken = this.jwtService.sign(
      {
        userId: vo.userInfo.id,
      },
      {
        expiresIn: this.configService.get<string>(
          'JWT_REFRESH_TOKEN_EXPRES_TIME',
        ),
      },
    );

    return vo;
  }

  async findLoginUser(
    loginUserDto: LoginUserDto,
    isAdmin: boolean,
  ): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        username: loginUserDto.username,
      },
      relations: ['roles', 'roles.permissions'],
    });

    if (!user) {
      throw new HttpException('user not existed', HttpStatus.BAD_REQUEST);
    }

    if (isAdmin === true && user.isAdmin === false) {
      throw new HttpException('user is not an admin', HttpStatus.FORBIDDEN);
    }

    if (user.password !== md5(loginUserDto.password)) {
      throw new HttpException('wrong password', HttpStatus.BAD_REQUEST);
    }

    return user;
  }

  transformUserToLoginUserVo(user: User): LoginUserVo {
    const vo = new LoginUserVo();
    vo.userInfo = {
      id: user.id,
      username: user.username,
      nickName: user.nickName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      headPic: user.headPic,
      createTime: user.createTime.getTime(),
      isFrozen: user.isFrozen,
      isAdmin: user.isAdmin,
      roles: user.roles.map((item) => item.name),
      permissions: user.roles.reduce((arr, item) => {
        item.permissions.forEach((permission) => {
          if (arr.indexOf(permission) === -1) {
            arr.push(permission);
          }
        });
        return arr;
      }, []),
    };
    return vo;
  }

  async refresh(
    refreshToken: string,
    isAdmin: boolean,
  ): Promise<RefreshTokenVo> {
    try {
      const data = this.jwtService.verify(refreshToken);

      const user = await this.findUserById(data.userId, isAdmin);

      const access_token = this.jwtService.sign(
        {
          userId: user.id,
          username: user.username,
          email: user.email,
          roles: user.roles,
          permissions: user.permissions,
        },
        {
          expiresIn: this.configService.get<string>(
            'JWT_ACCESS_TOKEN_EXPIRES_TIME',
          ),
        },
      );

      const refresh_token = this.jwtService.sign(
        {
          userId: user.id,
        },
        {
          expiresIn: this.configService.get<string>(
            'JWT_REFRESH_TOKEN_EXPRES_TIME',
          ),
        },
      );

      const vo = new RefreshTokenVo();

      vo.accessToken = access_token;
      vo.refreshToken = refresh_token;

      return vo;
    } catch (e) {
      throw new UnauthorizedException(
        'token has been invalid, please login again',
      );
    }
  }

  async findUserById(userId: number, isAdmin: boolean) {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: ['roles', 'roles.permissions'],
    });

    if (isAdmin === true && user.isAdmin === false) {
      throw new HttpException('user is not an admin', HttpStatus.FORBIDDEN);
    }

    return {
      id: user.id,
      username: user.username,
      isAdmin: user.isAdmin,
      email: user.email,
      roles: user.roles.map((item) => item.name),
      permissions: user.roles.reduce((arr, item) => {
        item.permissions.forEach((permission) => {
          if (arr.indexOf(permission) === -1) {
            arr.push(permission);
          }
        });
        return arr;
      }, []),
    };
  }

  async getUserInfo(userId: number) {
    const user = await this.findUserDetailById(userId);

    const vo = new UserDetailVo();
    vo.id = user.id;
    vo.email = user.email;
    vo.username = user.username;
    vo.headPic = user.headPic;
    vo.phoneNumber = user.phoneNumber;
    vo.nickName = user.nickName;
    vo.createTime = user.createTime;
    vo.isFrozen = user.isFrozen;

    return vo;
  }

  async findUserDetailById(userId: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });

    return user;
  }

  async updatePassword(passwordDto: UpdateUserPasswordDto) {
    const captcha = await this.redisService.get(
      `update_password_captcha_${passwordDto.email}`,
    );

    if (!captcha) {
      throw new HttpException('captcha is invalid', HttpStatus.BAD_REQUEST);
    }

    if (passwordDto.captcha !== captcha) {
      throw new HttpException('captcha is not correct', HttpStatus.BAD_REQUEST);
    }

    const foundUser = await this.userRepository.findOneBy({
      username: passwordDto.username,
    });

    if (foundUser.email !== passwordDto.email) {
      throw new HttpException('email is not correct', HttpStatus.BAD_REQUEST);
    }

    foundUser.password = md5(passwordDto.password);

    try {
      await this.userRepository.save(foundUser);
      return 'password update success';
    } catch (e) {
      this.logger.error(e, UserService);
      return 'password update fail';
    }
  }

  async updatePasswordCaptcha(address: string) {
    const code = Math.random().toString().slice(2, 8);

    await this.redisService.set(
      `update_password_captcha_${address}`,
      code,
      10 * 60,
    );

    await this.emailService.sendMail({
      to: address,
      subject: 'update password captcha',
      html: `<p>your updated password captcha is ${code}</p>`,
    });
    return 'send email success';
  }

  async updateUserInfo(userId: number, updateUserDto: UpdateUserDto) {
    const captcha = await this.redisService.get(
      `update_user_captcha_${updateUserDto.email}`,
    );

    if (!captcha) {
      throw new HttpException('captcha is invalid', HttpStatus.BAD_REQUEST);
    }

    if (updateUserDto.captcha !== captcha) {
      throw new HttpException('captcha is not correct', HttpStatus.BAD_REQUEST);
    }

    const foundUser = await this.userRepository.findOneBy({
      id: userId,
    });

    if (updateUserDto.nickName) {
      foundUser.nickName = updateUserDto.nickName;
    }
    if (updateUserDto.headPic) {
      foundUser.headPic = updateUserDto.headPic;
    }

    try {
      await this.userRepository.save(foundUser);
      return 'user info update success';
    } catch (e) {
      this.logger.error(e, UserService);
      return 'user info update fail';
    }
  }

  async updateUserInfoCaptcha(address: string) {
    const code = Math.random().toString().slice(2, 8);

    await this.redisService.set(
      `update_user_captcha_${address}`,
      code,
      10 * 60,
    );

    await this.emailService.sendMail({
      to: address,
      subject: 'update user info captcha',
      html: `<p>your updated user info captcha is ${code}</p>`,
    });
    return 'send email success';
  }

  async freezeUserById(id: number) {
    const user = await this.userRepository.findOneBy({
      id,
    });

    user.isFrozen = true;

    await this.userRepository.save(user);
  }

  async findUsers(userListDto: UserListDto) {
    const { username, nickName, email, pageNo = 1, pageSize = 2 } = userListDto;

    const skipCount = (pageNo - 1) * pageSize;

    const condition: Record<string, any> = {};

    if (username) {
      condition.username = Like(`%${username}%`);
    }
    if (nickName) {
      condition.nickName = Like(`%${nickName}%`);
    }
    if (email) {
      condition.email = Like(`%${email}%`);
    }

    const [users, totalCount] = await this.userRepository.findAndCount({
      select: [
        'id',
        'username',
        'nickName',
        'email',
        'phoneNumber',
        'isFrozen',
        'headPic',
        'createTime',
      ],
      skip: skipCount,
      take: pageSize,
      where: condition,
    });

    const vo = new UserListVo();

    vo.users = users;
    vo.totalCount = totalCount;
    return vo;
  }

  async uploadFile(file: Express.Multer.File) {
    const uniqueSuffix =
      Date.now() +
      '-' +
      Math.round(Math.random() * 1e9) +
      '-' +
      file.originalname;

    const bucketName = this.configService.get<string>('MINIO_BUCKET');
    await this.minioService.uploadFile(bucketName, uniqueSuffix, file.buffer);

    return `//${this.configService.get<string>(
      'MINIO_HOST',
    )}:${this.configService.get<string>(
      'MINIO_PORT',
    )}/${bucketName}/${uniqueSuffix}`;
  }
}
