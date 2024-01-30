import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';

import { EntityManager } from 'typeorm';

import { Booking } from 'src/booking/entities/booking.entity';
import { MeetingRoom } from 'src/meeting-room/entities/meeting-room.entity';
import { User } from 'src/user/entities/user.entity';
import { MeetingRoomUsedCountDto } from './dto/meeting-room-used-count.dto';
import { UserBookignCountDto } from './dto/user-booking-count.dto';

@Injectable()
export class StatisticService {
  constructor(
    @InjectEntityManager()
    private entityManager: EntityManager,
  ) {}

  async userBookingCount(userBookignCountDto: UserBookignCountDto) {
    const { startTime, endTime } = userBookignCountDto;

    const res = await this.entityManager
      .createQueryBuilder(Booking, 'b')
      .select('u.id', 'userId')
      .addSelect('u.username', 'username')
      .leftJoin(User, 'u', 'b.userId = u.id')
      .addSelect('count(1)', 'bookingCount')
      .where('b.startTime between :time1 and :time2', {
        time1: startTime,
        time2: endTime,
      })
      .addGroupBy('b.user')
      .getRawMany();

    return res;
  }

  async meetingRoomUsedCount(meetingRoomUsedCountDto: MeetingRoomUsedCountDto) {
    const { startTime, endTime } = meetingRoomUsedCountDto;

    const res = await this.entityManager
      .createQueryBuilder(Booking, 'b')
      .select('m.id', 'meetingRoomId')
      .addSelect('m.name', 'meetingRoomName')
      .leftJoin(MeetingRoom, 'm', 'b.roomId = m.id')
      .addSelect('count(1)', 'usedCount')
      .where('b.startTime between :time1 and :time2', {
        time1: startTime,
        time2: endTime,
      })
      .addGroupBy('b.roomId')
      .getRawMany();

    return res;
  }
}
