import { Injectable, MessageEvent } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { Response } from 'express';
import { Observable, interval, map } from 'rxjs';

import { EmitSSEData } from './dto/sse.dto';

@Injectable()
export class SseService {
  private clients = new Map<string, Response>();
  constructor(private readonly eventEmitter: EventEmitter2) {}

  emit(data: EmitSSEData) {
    this.eventEmitter.emit('sse:record.updated_sse', data);
  }

  addClient(clientId: string, res: Response, req: any) {
    if (this.clients.get(clientId)) {
      return;
    }
    this.clients.set(clientId, res);

    req.connection.on(
      'close',
      () => {
        if (this.clients.get(clientId)) {
          this.clients.delete(clientId);
        }
      },
      false,
    );
  }

  sendToClient(clientId: string, data: any) {
    const client = this.clients.get(clientId);
    if (client) {
      client.write(`data: ${JSON.stringify(data)}\n\n`);
    }
  }

  startHeartbeat() {
    interval(180000) // heartbeat detection per 3min
      .pipe(map(() => ({ event: 'heartbeat', data: 'pong' })))
      .subscribe((heartbeat) => {
        this.clients.forEach((_client, clientId) => {
          this.sendToClient(clientId, heartbeat);
        });
      });
  }

  updateRecord(): Observable<MessageEvent> {
    return new Observable<any>((observer) => {
      this.eventEmitter.on('sse:record.updated_sse', (data: EmitSSEData) => {
        observer.next(data);
      });
    });
  }
}
