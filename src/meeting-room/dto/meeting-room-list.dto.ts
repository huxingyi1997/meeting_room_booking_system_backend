import { PartialType, PickType } from '@nestjs/swagger';

import { Transform } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

import { MeetingRoom } from '../entities/meeting-room.entity';

export class MeetingRoomListDto extends PartialType(
  PickType(MeetingRoom, ['name', 'capacity', 'equipment']),
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
