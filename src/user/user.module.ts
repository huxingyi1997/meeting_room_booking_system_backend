import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmailModule } from '../email/email.module';
import { RedisModule } from '../redis/redis.module';
import { MinioModule } from 'src/minio/minio.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { Permission } from './entities/permission.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, Permission]),
    EmailModule,
    RedisModule,
    MinioModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
