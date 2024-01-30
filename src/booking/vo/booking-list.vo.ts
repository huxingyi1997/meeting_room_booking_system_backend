import { Booking } from '../entities/booking.entity';

export class BookingListVo {
  bookings: Booking[];

  totalCount: number;
}
