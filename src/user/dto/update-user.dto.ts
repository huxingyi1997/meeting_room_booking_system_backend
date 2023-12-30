import { IntersectionType, OmitType, PickType } from '@nestjs/swagger';

import { RegisterUserDto } from './register-user.dto';
import { User } from '../entities/user.entity';

export class UpdateUserDto extends IntersectionType(
  OmitType(RegisterUserDto, ['username', 'password']),
  PickType(User, ['headPic']),
) {}
