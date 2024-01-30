import { IntersectionType, PartialType, PickType } from '@nestjs/swagger';

import { CreateMeetingRoomDto } from './create-meeting-room.dto';
import { MeetingRoom } from '../entities/meeting-room.entity';

export class UpdateMeetingRoomDto extends IntersectionType(
  PartialType(CreateMeetingRoomDto),
  PickType(MeetingRoom, ['id']),
) {}
