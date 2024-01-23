import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MeetingRoom {
  @PrimaryGeneratedColumn({
    comment: 'Meeting room ID',
  })
  @IsNotEmpty({
    message: 'Meeting room id should not be null',
  })
  @IsNumber()
  id: number;

  @Column({
    length: 50,
    comment: 'Meeting room name',
  })
  @IsString()
  @IsNotEmpty({
    message: 'Meeting room name should not be null',
  })
  @MaxLength(10, {
    message: 'Max length of the meeting room name is 10',
  })
  name: string;

  @Column({
    comment: 'Meeting room capacity',
  })
  @IsNumber()
  @IsNotEmpty({
    message: 'Capacity of the meeting room should not be null',
  })
  capacity: number;

  @Column({
    length: 50,
    comment: 'Meeting room location',
  })
  @IsString()
  @IsNotEmpty({
    message: 'Location of the meeting room should not be null',
  })
  @MaxLength(50, {
    message: 'Max length of the meeting room location is 50',
  })
  location: string;

  @Column({
    length: 50,
    comment: 'equipment',
    default: '',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50, {
    message: 'Max length of the meeting room equipment is 50',
  })
  equipment: string;

  @Column({
    length: 100,
    comment: 'description',
    default: '',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, {
    message: 'Max length of the meeting room description is 100',
  })
  description: string;

  @Column({
    comment: 'is meeting room booked',
    default: false,
  })
  @IsBoolean()
  @IsNotEmpty()
  isBooked: boolean;

  @CreateDateColumn({
    comment: 'create time',
  })
  createTime: Date;

  @UpdateDateColumn({
    comment: 'update time',
  })
  updateTime: Date;
}
