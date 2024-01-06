import { IsInt, IsNotEmpty } from 'class-validator';

export class FreezeUserDto {
  @IsNotEmpty({
    message: 'user id should not be null',
  })
  @IsInt({
    message: 'not a legal user id format',
  })
  id: number;
}
