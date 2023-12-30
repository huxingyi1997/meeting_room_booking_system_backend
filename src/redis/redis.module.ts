import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { createClient } from 'redis';

import { RedisService } from './redis.service';

@Module({
  providers: [
    RedisService,
    {
      provide: 'REDIS_CLIENT',
      async useFactory(configService: ConfigService) {
        const client = createClient({
          socket: {
            host: configService.get<string>('REDIS_HOST'),
            port: +configService.get('REDIS_PORT'),
          },
          database: configService.get<number>('REDIS_DB'),
        });
        await client.connect();
        return client;
      },
      inject: [ConfigService],
    },
  ],
  exports: [RedisService],
})
export class RedisModule {}
