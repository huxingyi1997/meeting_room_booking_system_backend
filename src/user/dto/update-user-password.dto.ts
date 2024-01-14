import { OmitType } from '@nestjs/swagger';

import { RegisterUserDto } from './register-user.dto';

export class UpdateUserPasswordDto extends OmitType(RegisterUserDto, [
  'nickName',
]) {}
