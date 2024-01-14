import { OmitType } from '@nestjs/swagger';

import { PerformanceEntity } from '../entities/performance.entity';

export class PerformanceDto extends OmitType(PerformanceEntity, [
  'performance_id',
  'create_time',
]) {}
