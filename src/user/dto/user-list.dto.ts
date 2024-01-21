import { PartialType, PickType } from '@nestjs/swagger';

import { Transform } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

import { User } from '../entities/user.entity';

export class UserListDto extends PartialType(
  PickType(User, ['email', 'username', 'nickName']),
) {
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @IsOptional()
  pageNo?: number;

  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @IsOptional()
  pageSize?: number;
}
