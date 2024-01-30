import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

import { Role } from './role.entity';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    comment: 'username',
    unique: true,
  })
  @IsNotEmpty({
    message: 'username should not be null',
  })
  @IsString()
  username: string;

  @Column({
    length: 50,
    comment: 'password',
  })
  @IsNotEmpty({
    message: 'password should not be null',
  })
  @MinLength(6, {
    message: 'password must have min length 6',
  })
  @IsString()
  password: string;

  @Column({
    name: 'nick_name',
    length: 50,
    comment: 'nick name',
  })
  @IsNotEmpty({
    message: 'nick name should not be null',
  })
  @IsString()
  nickName: string;

  @Column({
    comment: 'email',
    length: 50,
  })
  @IsNotEmpty({
    message: 'email should not be null',
  })
  @IsEmail(
    {},
    {
      message: 'not a legal email format',
    },
  )
  email: string;

  @Column({
    comment: 'head pic',
    length: 1000,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  headPic?: string;

  @Column({
    comment: 'phone number',
    length: 20,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @Column({
    comment: 'is frozen',
    default: false,
  })
  @IsBoolean()
  isFrozen: boolean;

  @Column({
    comment: 'is admin',
    default: false,
  })
  @IsBoolean()
  isAdmin: boolean;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;

  @ManyToMany(() => Role)
  @JoinTable({
    name: 'user_roles',
  })
  roles: Role[];
}
