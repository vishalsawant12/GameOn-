//package com.example.GameOn.model ; 
//
//import java.time.Duration;
//import java.time.LocalDateTime;
//
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.FetchType;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
//import jakarta.persistence.PrePersist;
//import jakarta.persistence.PreUpdate;
//import jakarta.validation.constraints.FutureOrPresent;
//import jakarta.validation.constraints.NotNull;
//import jakarta.validation.constraints.Positive;
//import lombok.Data;
//
//@Entity
//  @Data
//  public class Booking{
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long id;
//	
//	@ManyToOne(fetch = FetchType.EAGER)
//	@JoinColumn(name = "turfId")
//	
//	private Turf turf;
////	
//	@ManyToOne(fetch = FetchType.EAGER)
//	@JoinColumn(name = "userId")
//	@NotNull(message = "user cannot be null")
//	    private User user;
//	
//	@NotNull(message = "Start time cannot be null")
//	@FutureOrPresent(message = "Start time must be in the present or future")
//	 private LocalDateTime startTime;
//	
//	@NotNull(message = "End time cannot be null")
//    	 private LocalDateTime endTime;
//	 		 
//}

package com.example.GameOn.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.*;

import java.time.LocalDateTime;


@Entity
@Data


public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Booking time cannot be null")
    @FutureOrPresent(message = "Booking time must be in the present or future")
    private LocalDateTime bookingTime;

    @NotNull(message = "Start time cannot be null")
    private LocalDateTime startTime;

    @NotNull(message = "End time cannot be null")
    private LocalDateTime endTime;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "turf_id", nullable = false)
    private Turf turf;

    @NotNull(message = "Total charge cannot be null")
    @Positive(message = "Total charge must be a positive number")
    private Double totalCharge;

    @NotNull(message = "Booking status cannot be null")
    private String status; // e.g., "booked", "canceled", "completed"

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getBookingTime() {
        return bookingTime;
    }

    public void setBookingTime(LocalDateTime bookingTime) {
        this.bookingTime = bookingTime;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Turf getTurf() {
        return turf;
    }

    public void setTurf(Turf turf) {
        this.turf = turf;
    }

    public Double getTotalCharge() {
        return totalCharge;
    }

    public void setTotalCharge(Double totalCharge) {
        this.totalCharge = totalCharge;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}





