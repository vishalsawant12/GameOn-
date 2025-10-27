//package com.example.GameOn.service; 
//
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//import org.springframework.web.server.ResponseStatusException;
//
//import com.example.GameOn.model.Booking;
//import com.example.GameOn.model.Turf;
//import com.example.GameOn.model.User;
//import com.example.GameOn.repository.BookingRepository;
//import com.example.GameOn.repository.TurfRepository;
//import com.example.GameOn.repository.UserRepository;
//import com.example.GameOn.responsewrapper.ResponseWrapper;
//
//@Service
//public class BookingService {
//	
//	@Autowired
//	private BookingRepository bookingRepository = null;
//	
//	@Autowired
//	private TurfRepository turfRepository;
//	
//	@Autowired
//	private UserRepository userRepository;
//	
//	@Autowired
//   private ResponseWrapper responseWrapper; 
//	
//	
////	create booking
//	
//	public ResponseEntity<?> createBooking(Booking booking)
//	{
//		  // Validate and fetch Turf
//		Turf turf = turfRepository.findById(booking.getTurf().getId()).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"turf not found"));
//		
//		User user = userRepository.findById(booking.getUser().getId()).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"user not found"));
//		
//		booking.setTurf(turf);
//		booking.setUser(user);
//		
//		boolean isBookingConflict = bookingRepository.existsByTurfAndStartTimeLessThanEqualAndEndTimeGreaterThanEqual(
//				booking.getTurf(),
//				booking.getStartTime(),
//				booking.getEndTime()
//				);
//		// If there's a conflict, return an error message
//				if (isBookingConflict) {
//					responseWrapper.setMessage("conflict:Turf is already booked");
//					responseWrapper.setData(null);
//					return new ResponseEntity<>(responseWrapper,HttpStatus.BAD_REQUEST);
//				}
//		
//		
//		try {
//			Booking savedBooking=bookingRepository.save(booking);
//			responseWrapper.setMessage("booking created sucessfully");
//			responseWrapper.setData(savedBooking);
//		    return new	ResponseEntity<>(responseWrapper,HttpStatus.CREATED);
//		    	
//		} catch (Exception e) {
//			responseWrapper.setMessage("error while creating booking"+e.getMessage());
//			responseWrapper.setData(null);
//			return new ResponseEntity<>(responseWrapper,HttpStatus.BAD_REQUEST);
//						
//		}
//	}
//	
//// get all bookings
//	
//	public ResponseEntity<?> getAllBookings(){
//		try {
//			Iterable<Booking> booking= bookingRepository.findAll();
//			responseWrapper.setMessage("sucessfully retrieved booking");
//			responseWrapper.setData(booking);
//			return new ResponseEntity<>(responseWrapper,HttpStatus.OK);	
//			
//		} catch (Exception e) {
//			responseWrapper.setMessage("errro retrived booking:"+e.getMessage());
//			responseWrapper.setData(null);
//			return new ResponseEntity<>(responseWrapper,HttpStatus.INTERNAL_SERVER_ERROR);
//			
//		}
//	}
//	
//}

//package com.example.GameOn.service;
//
//import com.example.GameOn.model.Booking;
//import com.example.GameOn.repository.BookingRepository;
//import com.example.GameOn.responsewrapper.ResponseWrapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//import org.springframework.web.server.ResponseStatusException;
//
//import java.util.List;
//
//@Service
//public class BookingService {
//
//    @Autowired
//    private BookingRepository bookingRepository;
//
//    @Autowired
//    private ResponseWrapper responseWrapper;
//
//    // Create a new booking
//    public ResponseEntity<?> createBooking(Booking booking) {
//        // Start time validation
//        if (booking.getStartTime() == null || booking.getEndTime() == null) {
//            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Start time and End time cannot be null");
//        }
//
//        if (booking.getStartTime().isAfter(booking.getEndTime())) {
//            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Start time cannot be after end time");
//        }
//
//        // Additional validation: check if the turf is available for the given period
//        // You would need to implement this check either in service or repository logic
//
//        // Save the booking
//        Booking savedBooking = bookingRepository.save(booking);
//
//        responseWrapper.setMessage("Booking created successfully");
//        responseWrapper.setData(savedBooking);
//        return new ResponseEntity<>(responseWrapper, HttpStatus.CREATED);
//    }
//
//    // Get a booking by ID
//    public ResponseEntity<?> getBookingById(Long id) {
//        Booking foundBooking = bookingRepository.findById(id).orElseThrow(() ->
//                new ResponseStatusException(HttpStatus.NOT_FOUND, "Booking not found with ID: " + id)
//        );
//        
//        responseWrapper.setMessage("Booking found");
//        responseWrapper.setData(foundBooking);
//        return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
//    }
//
//    // Get all bookings
//    public ResponseEntity<?> getAllBookings() {
//        List<Booking> bookings = bookingRepository.findAll();
//        responseWrapper.setMessage("Bookings retrieved successfully");
//        responseWrapper.setData(bookings);
//        return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
//    }
//
//    // Update a booking
//    public ResponseEntity<?> updateBooking(Long id, Booking updatedBooking) {
//        Booking existingBooking = bookingRepository.findById(id).orElseThrow(() ->
//                new ResponseStatusException(HttpStatus.NOT_FOUND, "No booking found with ID: " + id)
//        );
//
//        existingBooking.setStartTime(updatedBooking.getStartTime());
//        existingBooking.setEndTime(updatedBooking.getEndTime());
//        existingBooking.setStatus(updatedBooking.getStatus());
//        existingBooking.setTotalCharge(updatedBooking.getTotalCharge());
//        existingBooking.setTurf(updatedBooking.getTurf());
//        existingBooking.setUser(updatedBooking.getUser());
//
//        Booking savedBooking = bookingRepository.save(existingBooking);
//
//        responseWrapper.setMessage("Booking updated successfully");
//        responseWrapper.setData(savedBooking);
//        return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
//    }
//
//    // Delete a booking by ID
//    public ResponseEntity<?> deleteBooking(Long id) {
//        Booking booking = bookingRepository.findById(id).orElseThrow(() ->
//                new ResponseStatusException(HttpStatus.NOT_FOUND, "Booking not found with ID: " + id)
//        );
//
//        bookingRepository.delete(booking);
//
//        responseWrapper.setMessage("Booking deleted successfully");
//        responseWrapper.setData(id);
//        return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
//    }
//
//    // Get all bookings for a specific user
//    public ResponseEntity<?> getBookingsByUser(Long userId) {
//        List<Booking> bookings = bookingRepository.findAllByUserId(userId); 
//        if (bookings.isEmpty()) {
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No bookings found for user with ID: " + userId);
//        }
//
//        responseWrapper.setMessage("Bookings found for user");
//        responseWrapper.setData(bookings);
//        return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
//    }
//
//    // Get all bookings for a specific turf
//    public ResponseEntity<?> getBookingsByTurf(Long turfId) {
//        List<Booking> bookings = bookingRepository.findAllByturfId(turfId); 
//        if (bookings.isEmpty()) {
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No bookings found for turf with ID: " + turfId);
//        }
//
//        responseWrapper.setMessage("Bookings found for turf");
//        responseWrapper.setData(bookings);
//        return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
//    }
//}
//---------------------------------
package com.example.GameOn.service;

import com.example.GameOn.model.Booking;
import com.example.GameOn.model.Turf;
import com.example.GameOn.model.User;
import com.example.GameOn.repository.BookingRepository;
import com.example.GameOn.repository.TurfRepository;
import com.example.GameOn.repository.UserRepository;
import com.example.GameOn.responsewrapper.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.time.LocalDateTime;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private TurfRepository turfRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ResponseWrapper responseWrapper;

    // Create a new booking
    public ResponseEntity<?> createBooking(Booking booking) {
        // Validate start and end time
        if (booking.getStartTime()== null || booking.getEndTime() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Start time and End time cannot be null");
        }

        if (booking.getStartTime().isAfter(booking.getEndTime())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Start time cannot be after end time");
        }

        // Fetch Turf and User
        Turf turf = turfRepository.findById(booking.getTurf().getId()).orElseThrow(() ->
            new ResponseStatusException(HttpStatus.NOT_FOUND, "Turf not found with ID: " + booking.getTurf().getId())
        );

        User user = userRepository.findById(booking.getUser().getId()).orElseThrow(() ->
            new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found with ID: " + booking.getUser().getId())
        );

        // Set Turf and User in the booking
        booking.setTurf(turf);
        booking.setUser(user);

        // Check for booking conflicts
        boolean isBookingConflict = bookingRepository.existsByTurfAndStartTimeLessThanEqualAndEndTimeGreaterThanEqual(
                turf, booking.getStartTime(), booking.getEndTime()
        );
        if (isBookingConflict) {
            responseWrapper.setMessage("Conflict: Turf is already booked during the requested time");
            responseWrapper.setData(null);
            return new ResponseEntity<>(responseWrapper, HttpStatus.BAD_REQUEST);
        }

        // Save the booking
        try {
            Booking savedBooking = bookingRepository.save(booking);
            responseWrapper.setMessage("Booking created successfully");
            responseWrapper.setData(savedBooking);
            return new ResponseEntity<>(responseWrapper, HttpStatus.CREATED);
        } catch (Exception e) {
            responseWrapper.setMessage("Error while creating booking: " + e.getMessage());
            responseWrapper.setData(null);
            return new ResponseEntity<>(responseWrapper, HttpStatus.BAD_REQUEST);
        }
    }

    // Get booking by ID
    public ResponseEntity<?> getBookingById(Long id) {
        Booking foundBooking = bookingRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Booking not found with ID: " + id)
        );

        responseWrapper.setMessage("Booking found");
        responseWrapper.setData(foundBooking);
        return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
    }

    // Get all bookings
    public ResponseEntity<?> getAllBookings() {
        try {
            List<Booking> bookings = bookingRepository.findAll();
            responseWrapper.setMessage("Bookings retrieved successfully");
            responseWrapper.setData(bookings);
            return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
        } catch (Exception e) {
            responseWrapper.setMessage("Error retrieving bookings: " + e.getMessage());
            responseWrapper.setData(null);
            return new ResponseEntity<>(responseWrapper, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Update booking by ID
    public ResponseEntity<?> updateBooking(Long id, Booking updatedBooking) {
        Booking existingBooking = bookingRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Booking not found with ID: " + id)
        );

        existingBooking.setStartTime(updatedBooking.getStartTime());
        existingBooking.setEndTime(updatedBooking.getEndTime());
        existingBooking.setStatus(updatedBooking.getStatus());
        existingBooking.setTotalCharge(updatedBooking.getTotalCharge());
        existingBooking.setTurf(updatedBooking.getTurf());
        existingBooking.setUser(updatedBooking.getUser());

        try {
            Booking savedBooking = bookingRepository.save(existingBooking);
            responseWrapper.setMessage("Booking updated successfully");
            responseWrapper.setData(savedBooking);
            return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
        } catch (Exception e) {
            responseWrapper.setMessage("Error updating booking: " + e.getMessage());
            responseWrapper.setData(null);
            return new ResponseEntity<>(responseWrapper, HttpStatus.BAD_REQUEST);
        }
    }

    // Delete booking by ID
    public ResponseEntity<?> deleteBooking(Long id) {
        Booking booking = bookingRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Booking not found with ID: " + id)
        );

        bookingRepository.delete(booking);

        responseWrapper.setMessage("Booking deleted successfully");
        responseWrapper.setData(id);
        return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
    }

    // Get all bookings for a specific user
    public ResponseEntity<?> getBookingsByUser(Long userId) {
        List<Booking> bookings = bookingRepository.findAllByUserId(userId);
        if (bookings.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No bookings found for user with ID: " + userId);
        }

        responseWrapper.setMessage("Bookings found for user");
        responseWrapper.setData(bookings);
        return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
    }

    // Get all bookings for a specific turf
    public ResponseEntity<?> getBookingsByTurf(Long turfId) {
        List<Booking> bookings = bookingRepository.findAllByturfId(turfId);
        if (bookings.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No bookings found for turf with ID: " + turfId);
        }

        responseWrapper.setMessage("Bookings found for turf");
        responseWrapper.setData(bookings);
        return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
    }
}





