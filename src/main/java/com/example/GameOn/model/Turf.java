package com.example.GameOn.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.Data;


@Entity
@Data
public class Turf {
	
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "Turf name cannot be blank")
	@Size(min = 3, max = 100, message = "Turf name must be between 3 and 100 characters")
    private String name;
	
	@NotBlank(message = "Location cannot be blank")
    private String location;
	
	@NotNull(message = "Capacity cannot be null")
	@Min(value = 10, message = "Capacity must be at least 1")
	@Max(value = 20, message = "Capacity cannot exceed 20")
    private Integer capacity;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Integer getCapacity() {
		return capacity;
	}

	public void setCapacity(Integer capacity) {
		this.capacity = capacity;
	}

	public Boolean getAvailable() {
		return available;
	}

	public void setAvailable(Boolean available) {
		this.available = available;
	}

	public Double getChargePerHour() {
		return chargePerHour;
	}

	public void setChargePerHour(Double chargePerHour) {
		this.chargePerHour = chargePerHour;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	@NotNull(message = "Availability status cannot be null")
    private Boolean available;
	
	@NotNull(message = "Charge per hour cannot be null")
	@Positive(message = "Charge per hour must be a positive number")
	private Double chargePerHour;
	
	@NotBlank(message = "Image URL cannot be blank")
	private String imageUrl;

	


}
