//package com.example.GameOn.repository; 
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import com.example.GameOn.model.Booking;
//import com.example.GameOn.model.Turf;
//import com.example.GameOn.model.User;
//
//
//@Repository
//public interface BookingRepository  extends JpaRepository<Booking, Integer>{
//	
//	List<Booking> findByUser(User user);
//	List<Booking> findByTurf(Turf turf);
//	
//	boolean existsByTurfAndStartTimeLessThanEqualAndEndTimeGreaterThanEqual(
//			Turf turf, LocalDateTime startTime,LocalDateTime endTime);
//	
//}

package com.example.GameOn.repository;

import com.example.GameOn.model.Booking;
import com.example.GameOn.model.Turf;
import com.example.GameOn.model.User;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
//	 List<Booking> findByUser(User user);

	    // Find bookings by Turf
//	    List<Booking> findByTurf(Turf turf);

		List<Booking> findAllByUserId(Long userId); 

		List<Booking> findAllByturfId(Long turfId);

		boolean existsByTurfAndStartTimeLessThanEqualAndEndTimeGreaterThanEqual(Turf turf, LocalDateTime startTime,
				LocalDateTime endTime);

}


