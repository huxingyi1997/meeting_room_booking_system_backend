import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FeReportService } from './fe-report.service';
import { FeReportController } from './fe-report.controller';
import { ErrorReportEntity } from './entities/error.entity';
import { PerformanceEntity } from './entities/performance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ErrorReportEntity, PerformanceEntity])],
  controllers: [FeReportController],
  providers: [FeReportService],
})
export class FeReportModule {}
