import { Controller, Get, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { RequireLogin } from 'src/common';
import { ApiUnifiedArrayOkResponse } from 'src/utils';
import { StatisticService } from './statistic.service';
import { UserBookignCountDto } from './dto/user-booking-count.dto';
import { MeetingRoomUsedCountDto } from './dto/meeting-room-used-count.dto';
import { UserBookignCountVo } from './vo/user-booking-count.vo';
import { MeetingRoomUsedCountVo } from './vo/meeting-room-used-count.vo';

@ApiTags('Statistic')
@ApiBearerAuth()
@RequireLogin()
@Controller('statistic')
export class StatisticController {
  constructor(private readonly statisticService: StatisticService) {}

  @Get('userBookingCount')
  @ApiUnifiedArrayOkResponse(UserBookignCountVo)
  userBookignCount(
    @Query() userBookignCountDto: UserBookignCountDto,
  ): Promise<UserBookignCountVo[]> {
    return this.statisticService.userBookingCount(userBookignCountDto);
  }

  @Get('meetingRoomUsedCount')
  @ApiUnifiedArrayOkResponse(MeetingRoomUsedCountVo)
  meetingRoomUsedCount(
    @Query() meetingRoomUsedCountDto: MeetingRoomUsedCountDto,
  ): Promise<MeetingRoomUsedCountVo[]> {
    return this.statisticService.meetingRoomUsedCount(meetingRoomUsedCountDto);
  }
}
