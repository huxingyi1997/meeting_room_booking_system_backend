import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { RequireLogin, UserInfo } from 'src/common';
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

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @HttpCode(HttpStatus.OK)
  register(@Body() registerUser: RegisterUserDto) {
    return this.userService.register(registerUser);
  }

  @Get('register-captcha')
  captcha(@Query() { address }: RegisterCaptchaDto) {
    return this.userService.registerCaptcha(address);
  }

  @Get('init-data')
  initData() {
    return this.userService.initData();
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  userLogin(@Body() loginUser: LoginUserDto) {
    return this.userService.login(loginUser, false);
  }

  @Post('admin/login')
  @HttpCode(HttpStatus.OK)
  adminLogin(@Body() loginUser: LoginUserDto) {
    return this.userService.login(loginUser, true);
  }

  @Get('refresh')
  refresh(@Query() { refreshToken }: RefreshTokenDto) {
    return this.userService.refresh(refreshToken, false);
  }

  @Get('admin/refresh')
  adminRefresh(@Query() { refreshToken }: RefreshTokenDto) {
    return this.userService.refresh(refreshToken, true);
  }

  @Get('info')
  @RequireLogin()
  info(@UserInfo('userId') userId: number) {
    return this.userService.getUserInfo(userId);
  }

  @Post(['update_password', 'admin/update_password'])
  @HttpCode(HttpStatus.OK)
  @RequireLogin()
  updatePassword(@Body() passwordDto: UpdateUserPasswordDto) {
    return this.userService.updatePassword(passwordDto);
  }

  @Get('update_password/captcha')
  updatePasswordCaptcha(@Query() { address }: UpdateUserPasswordCaptchaDto) {
    return this.userService.updatePasswordCaptcha(address);
  }

  @Post(['update', 'admin/update'])
  @RequireLogin()
  update(
    @UserInfo('userId') userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUserInfo(userId, updateUserDto);
  }

  @Get('update/captcha')
  updateCaptcha(@UserInfo('email') address: string) {
    return this.userService.updateUserInfoCaptcha(address);
  }

  @RequireLogin()
  @Get('freeze')
  freeze(@Query() { id }: FreezeUserDto) {
    return this.userService.freezeUserById(id);
  }

  @RequireLogin()
  @Get('list')
  list(userListDto: UserListDto) {
    return this.userService.findUsers(userListDto);
  }
}
