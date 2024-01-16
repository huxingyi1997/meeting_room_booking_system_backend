import { PartialType, PickType } from '@nestjs/swagger';

import { IsInt, IsOptional } from 'class-validator';

import { User } from '../entities/user.entity';

export class UserListDto extends PartialType(
  PickType(User, ['email', 'username', 'nickName']),
) {
  @IsInt()
  @IsOptional()
  pageNo?: number;

  @IsInt()
  @IsOptional()
  pageSize?: number;
}
