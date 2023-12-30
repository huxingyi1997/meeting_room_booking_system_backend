import { OmitType } from '@nestjs/swagger';

import { User } from '../entities/user.entity';

class UserInfo extends OmitType(User, [
  'createTime',
  'updateTime',
  'roles',
  'password',
]) {
  createTime: number;

  roles: string[];

  permissions: string[];
}

export class LoginUserVo {
  userInfo: UserInfo;

  accessToken: string;

  refreshToken: string;
}
