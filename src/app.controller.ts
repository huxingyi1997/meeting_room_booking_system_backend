import { Controller, Get } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

import { AppService } from './app.service';
import { RequireLogin, RequirePermission, UserInfo } from './common';

@Controller()
@ApiExcludeController()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('aaa')
  // @SetMetadata('require-login', true)
  // @SetMetadata('require-permission', ['ddd'])
  @RequireLogin()
  @RequirePermission('ddd')
  aaaa(@UserInfo('username') username: string, @UserInfo() userInfo) {
    console.log(username);
    console.log(userInfo);
    return 'aaa';
  }

  @Get('bbb')
  bbb() {
    return 'bbb';
  }
}
