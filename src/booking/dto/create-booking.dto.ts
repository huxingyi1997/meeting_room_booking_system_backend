import { PickType } from '@nestjs/swagger';

import { IsNotEmpty, IsNumber } from 'class-validator';

import { Booking } from '../entities/booking.entity';

export class CreateBookingDto extends PickType(Booking, [
  'startTime',
  'endTime',
  'note',
]) {
  @IsNotEmpty({ message: 'Meeting Room Id shouldnot be null' })
  @IsNumber()
  meetingRoomId: number;
}
