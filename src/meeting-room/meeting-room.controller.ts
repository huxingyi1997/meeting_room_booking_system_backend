import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { ApiUnifiedOkResponse } from 'src/utils';
import { RequireLogin } from 'src/common';
import { MeetingRoomService } from './meeting-room.service';
import { MeetingRoomListDto } from './dto/meeting-room-list.dto';
import { MeetingRoomListVo } from './vo/meeting-room-list.vo';
import { CreateMeetingRoomDto } from './dto/create-meeting-room.dto';
import { MeetingRoom } from './entities/meeting-room.entity';
import { UpdateMeetingRoomDto } from './dto/update-meeting-room.dto';

@ApiTags('Meeting room')
@ApiBearerAuth()
@RequireLogin()
@Controller('meeting-room')
export class MeetingRoomController {
  constructor(private readonly meetingRoomService: MeetingRoomService) {}

  @Get('list')
  @ApiUnifiedOkResponse(MeetingRoomListVo)
  list(
    @Query() meetingRoomListDto: MeetingRoomListDto,
  ): Promise<MeetingRoomListVo> {
    return this.meetingRoomService.find(meetingRoomListDto);
  }

  @Post('create')
  @HttpCode(HttpStatus.OK)
  @ApiUnifiedOkResponse(MeetingRoom)
  create(@Body() meetingRoomDto: CreateMeetingRoomDto): Promise<MeetingRoom> {
    return this.meetingRoomService.create(meetingRoomDto);
  }

  @Get(':id')
  @ApiUnifiedOkResponse(MeetingRoom)
  find(@Param('id') id: number): Promise<MeetingRoom> {
    return this.meetingRoomService.findById(id);
  }

  @Put('update')
  @ApiUnifiedOkResponse()
  update(@Body() meetingRoomDto: UpdateMeetingRoomDto): Promise<string> {
    return this.meetingRoomService.update(meetingRoomDto);
  }

  @Delete(':id')
  @ApiUnifiedOkResponse()
  delete(@Param('id') id: number): Promise<string> {
    return this.meetingRoomService.delete(id);
  }
}
