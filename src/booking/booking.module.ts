import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmailModule } from 'src/email/email.module';
import { RedisModule } from 'src/redis/redis.module';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking } from './entities/booking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Booking]), EmailModule, RedisModule],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
