import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity('error_report_tab')
export class ErrorReportEntity {
  @Generated('increment')
  @PrimaryColumn('bigint')
  id: string;

  @Column({ type: 'text' })
  @IsString()
  @IsNotEmpty()
  error: string;

  @Column({ type: 'text' })
  @IsString()
  @IsNotEmpty()
  error_info: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;
}
