package com.example.GameOn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.service.annotation.DeleteExchange;

import com.example.GameOn.model.Turf;
import com.example.GameOn.service.TurfServices;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin("*") 
public class TurfController {
	
	@Autowired
	private TurfServices turfServices;
	
	@PostMapping("/turfs")
	public ResponseEntity<?> createTurf(@RequestBody @Valid Turf turf){
		return turfServices.createTurf(turf);
	}
	
	@GetMapping("/turfs/{name}")
	public ResponseEntity<?> getTurfByName(@PathVariable String name){
		return turfServices.getTurfByName(name);
	}
	
	@GetMapping("/turfs/id/{id}")
	public ResponseEntity<?> getTurfById(@PathVariable Long id){
		return turfServices.getTurfById(id);
	
	}
	@PutMapping("/turfs/{id}")
	public ResponseEntity<?> updateTurf(@PathVariable Long id ,@RequestBody  Turf updatedTurf){
		return turfServices.updateTurf(id, updatedTurf);
	}
	
	@GetMapping("/turfs")
	public ResponseEntity<?> getAllTurf(){
		return turfServices.getAllTurf();
	}
	
	@GetMapping("/turfs/search")
	public ResponseEntity<?>getTurfs(@RequestParam(required = false) String location){
		if (location != null && !location.isBlank()) {
			return turfServices.getTurfByLocation(location);		
		} else {
			return turfServices.getAllTurf();
		}
	}
	
//	@DeleteMapping("/turfs/{id}")
//	public ResponseEntity<?> deleteTurf(@PathVariable Long id){
//		if(id == null) {
//			throw new IllegalArgumentException("the given id must not be null");
//		}
//     	turfServices.deleteTurf(id);
//		return turfServices.deleteTurf(id);
//	}
//	
//	

}
