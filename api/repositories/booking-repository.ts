import { BookingService, CreateBookingDto, UpdateBookingDto } from "../generated";

export class BookingRepository {
    public async getBookings() {
        return await BookingService.bookingControllerGetBookings();
    }

    public async getBookingDetails(bookingId: string) {
        return await BookingService.bookingControllerGetBookingDetails(bookingId);
    }

    public async createBooking(bookingData: CreateBookingDto) {
        return await BookingService.bookingControllerCreateBooking(bookingData);
    }

    public async updateBooking(email: string, bookingData: UpdateBookingDto) {
        return await BookingService.bookingControllerUpdateBooking(email, bookingData);
    }
}