import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { MeetingRoom } from 'src/meeting-room/entities/meeting-room.entity';
import { User } from 'src/user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export enum BookingStatus {
  Progressing = 'progressing',
  Approved = 'approved',
  Rejected = 'rejected',
  Released = 'released',
}

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: 'meeting start time',
  })
  @ApiProperty({
    type: 'number',
    format: 'date-time',
  })
  @IsNotEmpty({ message: 'Meeting start time should not be null' })
  @IsNumber()
  startTime: Date;

  @Column({
    comment: 'meeting end time',
  })
  @ApiProperty({
    type: 'number',
    format: 'date-time',
  })
  @IsNotEmpty({ message: 'Meeting end time should not be null' })
  @IsNumber()
  endTime: Date;

  @Column({
    length: 20,
    comment: 'status',
    default: BookingStatus.Progressing,
  })
  @IsEnum(BookingStatus)
  @IsOptional()
  status: BookingStatus;

  @Column({
    length: 100,
    comment: 'note',
    default: '',
  })
  @IsString()
  @IsOptional()
  note?: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => MeetingRoom)
  room: MeetingRoom;

  @CreateDateColumn({
    comment: 'create time',
  })
  createTime: Date;

  @UpdateDateColumn({
    comment: 'update time',
  })
  updateTime: Date;
}
