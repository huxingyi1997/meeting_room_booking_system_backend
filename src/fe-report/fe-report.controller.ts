import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PerformanceDto } from './dto/performance.dto';
import { ErrorReportDto } from './dto/error.dto';
import { FeReportService } from './fe-report.service';
import { ApiUnifiedOkResponse } from '../utils';

@ApiTags('FE report')
@Controller('fe-report')
export class FeReportController {
  constructor(private readonly feReportService: FeReportService) {}

  @Post('performance')
  @HttpCode(HttpStatus.OK)
  @ApiUnifiedOkResponse()
  performance(@Body() metric: PerformanceDto) {
    return this.feReportService.performanceReport(metric);
  }

  @Post('error')
  @HttpCode(HttpStatus.OK)
  @ApiUnifiedOkResponse()
  error(@Body() error: ErrorReportDto) {
    return this.feReportService.errorReport(error);
  }
}
