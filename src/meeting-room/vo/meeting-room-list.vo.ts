import { MeetingRoom } from '../entities/meeting-room.entity';

export class MeetingRoomListVo {
  meetingRooms: Array<MeetingRoom>;

  totalCount: number;
}
