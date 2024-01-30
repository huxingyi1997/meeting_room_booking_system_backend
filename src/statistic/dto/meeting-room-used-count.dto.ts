import { IsNotEmpty, IsString } from 'class-validator';

export class MeetingRoomUsedCountDto {
  @IsNotEmpty()
  @IsString()
  startTime: string;

  @IsNotEmpty()
  @IsString()
  endTime: string;
}
