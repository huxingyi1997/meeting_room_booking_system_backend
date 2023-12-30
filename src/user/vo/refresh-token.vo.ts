import { OmitType } from '@nestjs/swagger';

import { LoginUserVo } from './login-user.vo';

export class RefreshTokenVo extends OmitType(LoginUserVo, ['userInfo']) {}
