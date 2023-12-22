import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { RegisterCaptchaDto } from './dto/register-captcha.dto';

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
}
