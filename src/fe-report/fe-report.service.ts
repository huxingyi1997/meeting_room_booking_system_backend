import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { PerformanceDto } from './dto/performance.dto';
import { ErrorReportDto } from './dto/error.dto';
import { ErrorReportEntity } from './entities/error.entity';
import { PerformanceEntity } from './entities/performance.entity';

@Injectable()
export class FeReportService {
  constructor(
    @InjectRepository(ErrorReportEntity)
    private errorReportRepository: Repository<ErrorReportEntity>,

    @InjectRepository(PerformanceEntity)
    private performanceRepository: Repository<PerformanceEntity>,
  ) {}

  performanceReport(metric: PerformanceDto) {
    this.performanceRepository.save(metric);
  }

  errorReport(error: ErrorReportDto) {
    this.errorReportRepository.save(error);
  }
}
