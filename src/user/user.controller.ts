import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { RegisterCaptchaDto } from './dto/register-captcha.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
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
  userLogin(@Body() loginUser: LoginUserDto) {
    return this.userService.login(loginUser, false);
  }

  @Post('admin/login')
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
}
