import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiExcludeEndpoint,
  ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

import * as path from 'path';

import { RequireLogin, UserInfo } from 'src/common';
import { ApiUnifiedCreatedResponse, ApiUnifiedOkResponse } from 'src/utils';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { RegisterCaptchaDto } from './dto/register-captcha.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
import { UpdateUserPasswordCaptchaDto } from './dto/update-user-password-captcha.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FreezeUserDto } from './dto/freeze-user.dto';
import { UserListDto } from './dto/user-list.dto';
import { LoginUserVo } from './vo/login-user.vo';
import { RefreshTokenVo } from './vo/refresh-token.vo';
import { UserDetailVo } from './vo/user-info.vo';
import { UserListVo } from './vo/user-list.vo';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @HttpCode(HttpStatus.OK)
  @ApiUnifiedOkResponse()
  register(@Body() registerUser: RegisterUserDto): Promise<string> {
    return this.userService.register(registerUser);
  }

  @Get('register-captcha')
  @ApiUnifiedOkResponse()
  captcha(@Query() { address }: RegisterCaptchaDto): Promise<string> {
    return this.userService.registerCaptcha(address);
  }

  @Get('init-data')
  @ApiUnifiedOkResponse()
  @ApiExcludeEndpoint()
  initData(): Promise<string> {
    return this.userService.initData();
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiUnifiedOkResponse(LoginUserVo)
  userLogin(@Body() loginUser: LoginUserDto): Promise<LoginUserVo> {
    return this.userService.login(loginUser, false);
  }

  @Post('admin/login')
  @HttpCode(HttpStatus.OK)
  @ApiUnifiedOkResponse(LoginUserVo)
  adminLogin(@Body() loginUser: LoginUserDto): Promise<LoginUserVo> {
    return this.userService.login(loginUser, true);
  }

  @Get('refresh')
  @ApiUnifiedOkResponse(RefreshTokenVo)
  refresh(@Query() { refreshToken }: RefreshTokenDto): Promise<RefreshTokenVo> {
    return this.userService.refresh(refreshToken, false);
  }

  @Get('admin/refresh')
  @ApiUnifiedOkResponse(RefreshTokenVo)
  adminRefresh(
    @Query() { refreshToken }: RefreshTokenDto,
  ): Promise<RefreshTokenVo> {
    return this.userService.refresh(refreshToken, true);
  }

  @ApiBearerAuth()
  @RequireLogin()
  @Get('info')
  @ApiUnifiedOkResponse(UserDetailVo)
  info(@UserInfo('userId') userId: number): Promise<UserDetailVo> {
    return this.userService.getUserInfo(userId);
  }

  @Post(['update_password', 'admin/update_password'])
  @HttpCode(HttpStatus.OK)
  @ApiUnifiedOkResponse()
  updatePassword(@Body() passwordDto: UpdateUserPasswordDto): Promise<string> {
    return this.userService.updatePassword(passwordDto);
  }

  @Get('update_password/captcha')
  @ApiUnifiedOkResponse()
  updatePasswordCaptcha(
    @Query() { address }: UpdateUserPasswordCaptchaDto,
  ): Promise<string> {
    return this.userService.updatePasswordCaptcha(address);
  }

  @ApiBearerAuth()
  @RequireLogin()
  @Post(['update', 'admin/update'])
  @HttpCode(HttpStatus.OK)
  @ApiUnifiedOkResponse()
  update(
    @UserInfo('userId') userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<string> {
    return this.userService.updateUserInfo(userId, updateUserDto);
  }

  @ApiBearerAuth()
  @RequireLogin()
  @Get('update/captcha')
  @ApiUnifiedOkResponse()
  updateCaptcha(@UserInfo('email') address: string): Promise<string> {
    return this.userService.updateUserInfoCaptcha(address);
  }

  @ApiBearerAuth()
  @RequireLogin()
  @Get('freeze')
  @ApiUnifiedOkResponse()
  freeze(@Query() { id }: FreezeUserDto): Promise<void> {
    return this.userService.freezeUserById(id);
  }

  @ApiBearerAuth()
  @RequireLogin()
  @Get('list')
  @ApiUnifiedOkResponse(UserListVo)
  list(@Query() userListDto: UserListDto): Promise<UserListVo> {
    return this.userService.findUsers(userListDto);
  }

  @ApiBearerAuth()
  @RequireLogin()
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        fileSize: 1024 * 1024 * 10,
      },
      fileFilter(_req, file, callback) {
        const extname = path.extname(file.originalname);
        if (['.png', '.jpg', '.gif', 'webp'].includes(extname)) {
          callback(null, true);
        } else {
          callback(new BadRequestException('Allpw upload image only'), false);
        }
      },
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiUnifiedCreatedResponse()
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.userService.uploadFile(file);
  }
}
