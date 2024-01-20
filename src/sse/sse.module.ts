import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { SseService } from './sse.service';
import { SseController } from './sse.controller';

@Module({
  imports: [EventEmitterModule.forRoot()],
  controllers: [SseController],
  providers: [SseService],
  exports: [SseService],
})
export class SseModule {}
