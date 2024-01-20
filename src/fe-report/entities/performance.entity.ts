import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

class PerformanceEntry {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/duration) */
  @IsNumber()
  @IsNotEmpty()
  duration: number;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/entryType) */
  @IsString()
  @IsNotEmpty()
  entryType: string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/name) */
  @IsString()
  @IsNotEmpty()
  name: string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/startTime) */
  @IsNumber()
  @IsNotEmpty()
  startTime: number;
}

enum MetricNameEnum {
  CLS = 'CLS',
  FCP = 'FCP',
  FID = 'FID',
  INP = 'INP',
  LCP = 'LCP',
  TTFB = 'TTFB',
}

enum MetricRatingEnum {
  Good = 'good',
  NeedsImprovement = 'needs-improvement',
  Poor = 'poor',
}

enum MetricNavigationEnum {
  Navigate = 'navigate',
  Reload = 'reload',
  BackForward = 'back-forward',
  BackForwardCache = 'back-forward-cache',
  Prerender = 'prerender',
  Restore = 'restore',
}

@Entity('performance_report_tab')
export class PerformanceEntity {
  @Generated('increment')
  @PrimaryColumn('bigint')
  performance_id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  /**
   * The name of the metric (in acronym form).
   */
  @Column({ type: 'enum', enum: MetricNameEnum })
  @IsEnum(MetricNameEnum)
  @IsNotEmpty()
  name: MetricNameEnum;

  /**
   * The current value of the metric.
   */
  @Column()
  @IsNumber()
  @IsNotEmpty()
  value: number;

  /**
   * The rating as to whether the metric value is within the "good",
   * "needs improvement", or "poor" thresholds of the metric.
   */
  @Column({ type: 'enum', enum: MetricRatingEnum })
  @IsEnum(MetricRatingEnum)
  @IsNotEmpty()
  rating: MetricRatingEnum;

  /**
   * The delta between the current value and the last-reported value.
   * On the first report, `delta` and `value` will always be the same.
   */
  @Column()
  @IsNumber()
  @IsNotEmpty()
  delta: number;

  /**
   * A unique ID representing this particular metric instance. This ID can
   * be used by an analytics tool to dedupe multiple values sent for the same
   * metric instance, or to group multiple deltas together and calculate a
   * total. It can also be used to differentiate multiple different metric
   * instances sent from the same page, which can happen if the page is
   * restored from the back/forward cache (in that case new metrics object
   * get created).
   */
  @Column()
  @IsString()
  @IsNotEmpty()
  id: string;

  /**
   * Any performance entries relevant to the metric value calculation.
   * The array may also be empty if the metric value was not based on any
   * entries (e.g. a CLS value of 0 given no layout shifts).
   */
  @Column({ type: 'json' })
  @IsNotEmpty()
  entries: PerformanceEntry[];

  /**
   * The type of navigation.
   *
   * This will be the value returned by the Navigation Timing API (or
   * `undefined` if the browser doesn't support that API), with the following
   * exceptions:
   * - 'back-forward-cache': for pages that are restored from the bfcache.
   * - 'prerender': for pages that were prerendered.
   * - 'restore': for pages that were discarded by the browser and then
   * restored by the user.
   */
  @Column({ type: 'enum', enum: MetricNavigationEnum })
  @IsEnum(MetricNavigationEnum)
  @IsNotEmpty()
  navigationType: MetricNavigationEnum;
}
