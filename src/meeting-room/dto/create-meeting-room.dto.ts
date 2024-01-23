import { OmitType } from '@nestjs/swagger';

import { MeetingRoom } from '../entities/meeting-room.entity';

export class CreateMeetingRoomDto extends OmitType(MeetingRoom, [
  'id',
  'isBooked',
  'createTime',
  'updateTime',
]) {}
