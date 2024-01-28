import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { RequireLogin, UserInfo } from 'src/common';
import { ApiUnifiedOkResponse } from 'src/utils';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingListDto } from './dto/booking-list.dto';
import { BookingListVo } from './vo/booking-list.vo';

@ApiBearerAuth()
@RequireLogin()
@ApiTags('Booking')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post('add')
  @HttpCode(HttpStatus.OK)
  @ApiUnifiedOkResponse()
  add(
    @Body() booking: CreateBookingDto,
    @UserInfo('userId') userId: number,
  ): Promise<void> {
    return this.bookingService.add(booking, userId);
  }

  @Get('list')
  @ApiUnifiedOkResponse(BookingListVo)
  list(@Query() bookingListDto: BookingListDto): Promise<BookingListVo> {
    return this.bookingService.find(bookingListDto);
  }

  @Get('apply/:id')
  @ApiUnifiedOkResponse()
  apply(@Param('id') id: number): Promise<string> {
    return this.bookingService.apply(id);
  }

  @Get('reject/:id')
  @ApiUnifiedOkResponse()
  reject(@Param('id') id: number): Promise<string> {
    return this.bookingService.reject(id);
  }

  @Get('unbind/:id')
  @ApiUnifiedOkResponse()
  unbind(@Param('id') id: number): Promise<string> {
    return this.bookingService.unbind(id);
  }

  @Get('urge/:id')
  @ApiUnifiedOkResponse()
  urge(@Param('id') id: number): Promise<string> {
    return this.bookingService.urge(id);
  }
}
