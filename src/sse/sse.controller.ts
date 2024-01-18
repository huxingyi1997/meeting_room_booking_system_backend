import { Controller, MessageEvent, Req, Res, Sse } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { Response } from 'express';
import { Observable, fromEvent, map } from 'rxjs';

import { SseService } from './sse.service';

@ApiTags('sse')
@Controller('sse')
export class SseController {
  constructor(
    private readonly sseService: SseService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @Sse('update_record')
  updateRecord(@Req() req, @Res() res: Response): Observable<MessageEvent> {
    const address = req.socket.remoteAddress;
    const port = req.socket.remotePort;
    this.sseService.addClient(`${address}:${port}`, res, req);
    return fromEvent(this.eventEmitter, 'sse:record.updated_sse').pipe(
      map((data) => {
        return data as MessageEvent;
      }),
    );
  }

  onModuleInit() {
    this.sseService.startHeartbeat();
  }
}
