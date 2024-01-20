import { OmitType } from '@nestjs/swagger';

import { ErrorReportEntity } from '../entities/error.entity';

export class ErrorReportDto extends OmitType(ErrorReportEntity, [
  'id',
  'create_time',
]) {}
