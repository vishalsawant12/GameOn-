package com.example.GameOn.service;



import java.util.List;
//import java.util.Optional; 
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.GameOn.model.Turf;
import com.example.GameOn.repository.TurfRepository;
import com.example.GameOn.responsewrapper.ResponseWrapper;


@Service
public class TurfServices {

	@Autowired
	private TurfRepository turfRepository;

	@Autowired
	ResponseWrapper responseWrapper;
	

	

	
//	create
	
	public ResponseEntity<?> createTurf(Turf turf) 
	{
		if(turf.getImageUrl()==null || turf.getImageUrl().isBlank()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"image url cannot be blank ");
		}
		
		Turf saveTurf = turfRepository.save(turf);
		responseWrapper.setMessage("Turf created sucessfully");
		responseWrapper.setData(saveTurf);
		return new ResponseEntity<>(responseWrapper, HttpStatus.CREATED);

	}

	
	public ResponseEntity<?> getTurfByName(String name){
		Turf foundTurf = turfRepository.findByName(name).orElseThrow(()->
		{
			throw new ResponseStatusException(HttpStatus.NOT_FOUND , "Turf not found by name " + name);
		});
		
		responseWrapper.setMessage("Turf found ");
		responseWrapper.setData(foundTurf);
		return new ResponseEntity<>(responseWrapper , HttpStatus.OK);
	}
	


	//	update Turf
	public ResponseEntity<?> updateTurf(Long id , Turf updatedTurf){
		Turf toUpdateTurf = turfRepository.findById(id).orElseThrow(()->{
			throw new ResponseStatusException(HttpStatus.NOT_FOUND , "No turf found with id " + id);
		});
		
		toUpdateTurf.setName(updatedTurf.getName());
		toUpdateTurf.setLocation(updatedTurf.getLocation());
		toUpdateTurf.setCapacity(updatedTurf.getCapacity());
		toUpdateTurf.setAvailable(updatedTurf.getAvailable());
		toUpdateTurf.setChargePerHour(updatedTurf.getChargePerHour());	
		toUpdateTurf.setImageUrl(updatedTurf.getImageUrl());
		Turf savedTurf = turfRepository.save(toUpdateTurf);
		
		responseWrapper.setMessage("Updated Successfully ");
		responseWrapper.setData(savedTurf);
		return new ResponseEntity<>(responseWrapper , HttpStatus.OK);
	}
	
//	get all turf
	public ResponseEntity<?> getAllTurf(){
		List<Turf> turfs = turfRepository.findAll();
		responseWrapper.setMessage("found turf");;
		responseWrapper.setData(turfs);
		return new ResponseEntity<>(responseWrapper,HttpStatus.OK);
	}
	
// Get Turf by ID
	public ResponseEntity<?> getTurfById(Long id){
		Turf foundTurf = turfRepository.findById(id).orElseThrow(() ->
	  new ResponseStatusException(HttpStatus.NOT_FOUND,"no turf found with id"+id)
		);
		responseWrapper.setMessage("turf found with id");
		responseWrapper.setData(foundTurf);
		return new ResponseEntity<>(responseWrapper,HttpStatus.OK);
	}
	
//	get turf by location
	public ResponseEntity<?> getTurfByLocation(String location){
		if(location == null || location.isBlank()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Location cannot be blank");		
		}
		List<Turf> turfs = turfRepository.findByLocationContainingIgnoreCase(location);
		if (turfs.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND,"No turf found at location:"+location);			
		}
		responseWrapper.setMessage("Turf found for location:"+location);
		responseWrapper.setData(turfs);
		return new ResponseEntity<>(responseWrapper,HttpStatus.OK);
		
	}

	
// Delete Turf by ID
	
	public ResponseEntity<?> deleteTurf(Long id){
		Turf turf = turfRepository.findById(id).orElseThrow(() ->
			 new ResponseStatusException(HttpStatus.NOT_FOUND,"no turf found with id"+ id)
		);
		
		turfRepository.delete(turf);
		
		responseWrapper.setMessage("turf deleted sucessfully");
		responseWrapper.setData(id);
		return new ResponseEntity<>(responseWrapper,HttpStatus.OK);
	}

	
	
}
