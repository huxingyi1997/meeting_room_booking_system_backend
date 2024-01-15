import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export enum SseActionEnum {
  CREATE = 'create',
  UPDATE = 'update',
}

export class EmitSSEData {
  @IsString()
  @IsNotEmpty()
  module: string;

  @IsEnum(SseActionEnum)
  @IsOptional()
  action?: SseActionEnum;

  data: {
    [key: string]: any;
  };
}
