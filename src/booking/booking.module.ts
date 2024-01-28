import { Module } from '@nestjs/common';

import { EmailModule } from 'src/email/email.module';
import { RedisModule } from 'src/redis/redis.module';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';

@Module({
  imports: [EmailModule, RedisModule],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
