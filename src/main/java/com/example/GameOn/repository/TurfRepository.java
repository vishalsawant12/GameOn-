package com.example.GameOn.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.GameOn.model.Turf;


@Repository 
public interface TurfRepository  extends JpaRepository<Turf, Long>{
	
//	List<Turf> findByAvailableTrue();

	Optional<Turf> findByName(String name);

	List<Turf> findByLocationContainingIgnoreCase(String location);

	
	

	
	
	

} 
