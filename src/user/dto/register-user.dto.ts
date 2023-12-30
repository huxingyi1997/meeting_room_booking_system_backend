import { PickType } from '@nestjs/swagger';

import { IsNotEmpty } from 'class-validator';

import { User } from '../entities/user.entity';

export class RegisterUserDto extends PickType(User, [
  'username',
  'nickName',
  'password',
  'email',
]) {
  @IsNotEmpty({
    message: 'captcha should not be null',
  })
  captcha: string;
}
