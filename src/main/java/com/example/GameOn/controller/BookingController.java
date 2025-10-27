//package com.example.GameOn.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.GameOn.model.Booking;
//import com.example.GameOn.service.BookingService;
////
//import jakarta.validation.Valid;
//
//@RestController
//@RequestMapping("/api")
//@CrossOrigin("*")
//public class BookingController {
//	
//	@Autowired
//	private BookingService bookingService;
//	
//	@PostMapping("/booking")
//	public ResponseEntity<?> createBooking( @RequestBody @Valid Booking booking){
//		return bookingService.createBooking(booking);
//		
//	}
//	
////	get all bookings
//	
//	@GetMapping("/booking")
//	public ResponseEntity<?>getAllBooking(){
//		return bookingService.getAllBookings();
//	}
//	
//}

package com.example.GameOn.controller;

import com.example.GameOn.model.Booking;
import com.example.GameOn.service.BookingService;
import com.example.GameOn.responsewrapper.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin("*")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private ResponseWrapper responseWrapper;

    // Create a new booking
    @PostMapping
    public ResponseEntity<?> createBooking(@RequestBody Booking booking) {
        return bookingService.createBooking(booking);
    }

    // Get booking by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }

    // Get all bookings
    @GetMapping
    public ResponseEntity<?> getAllBookings() {
        return bookingService.getAllBookings();
    }

    // Update booking by ID
    @PutMapping("/{id}")
    public ResponseEntity<?> updateBooking(@PathVariable Long id, @RequestBody Booking updatedBooking) {
        return bookingService.updateBooking(id, updatedBooking);
    }

    // Delete booking by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBooking(@PathVariable Long id) {
        return bookingService.deleteBooking(id);
    }

    // Get all bookings for a specific user
    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getBookingsByUser(@PathVariable Long userId) {
        return bookingService.getBookingsByUser(userId);
    }

    // Get all bookings for a specific turf
    @GetMapping("/turf/{turfId}")
    public ResponseEntity<?> getBookingsByTurf(@PathVariable Long turfId) {
        return bookingService.getBookingsByTurf(turfId);
    }
}
