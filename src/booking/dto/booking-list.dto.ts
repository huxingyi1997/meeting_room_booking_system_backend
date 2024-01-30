import { Transform } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class BookingListDto {
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @IsOptional()
  pageNo?: number;

  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @IsOptional()
  pageSize?: number;

  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  meetingRoomName?: string;

  @IsString()
  @IsOptional()
  meetingRoomPosition?: string;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsOptional()
  bookingTimeRangeStart?: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsOptional()
  bookingTimeRangeEnd?: number;
}
