package com.example.GameOn.service;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.authenticator.SavedRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.embedded.undertow.ConfigurableUndertowWebServerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.GameOn.model.Turf;
import com.example.GameOn.model.User;
import com.example.GameOn.repository.UserRepository;
import com.example.GameOn.responsewrapper.ResponseWrapper;

import ch.qos.logback.core.joran.conditional.IfAction;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	ResponseWrapper responseWrapper;
	
//	create new user
	
	public ResponseEntity<?> createUser(User user){
		Optional<User> existingUserByUsername=userRepository.findByUsername(user.getUsername());
		Optional<User> existingUserByEmail= userRepository.findByEmail(user.getEmail());
		
		if (existingUserByUsername.isPresent()) {
			responseWrapper.setMessage("username already exists");
			responseWrapper.setData(null);
			return new ResponseEntity<>(responseWrapper,HttpStatus.BAD_REQUEST);	
		}
			
		if (existingUserByUsername.isPresent()) {
			responseWrapper.setMessage("Email already exist");
			responseWrapper.setData(null);
			return new ResponseEntity<>(responseWrapper,HttpStatus.BAD_REQUEST);	
		}
		
		User savedUser=userRepository.save(user);
		responseWrapper.setMessage("user sucessfully created");
		responseWrapper.setData(savedUser);
		return new ResponseEntity<>(responseWrapper,HttpStatus.CREATED);	
				
	}
	
//	update
	
	public ResponseEntity<?> updateUser(Long id,User userDetails){
		Optional<User> existingUser = userRepository.findById(id);
		
		if (!existingUser.isPresent()) {
			responseWrapper.setMessage("user not found");
			responseWrapper.setData(null);
			return new ResponseEntity<>(responseWrapper,HttpStatus.NOT_FOUND);		
		}
		
		User existingUserObj= existingUser.get();
		
		existingUserObj.setUsername(userDetails.getUsername());
		existingUserObj.setEmail(userDetails.getEmail());
		existingUserObj.setPassword(userDetails.getPassword());
		existingUserObj.setIsAdmin(userDetails.getIsAdmin());
		
		
		User updateUser =userRepository.save(existingUserObj);
		responseWrapper.setMessage("user update sucessfully");
		responseWrapper.setData(updateUser);
		return new ResponseEntity<>(responseWrapper,HttpStatus.OK);
		
	}
	
	public ResponseEntity<?> getAllUser(){
		List<User> users = userRepository.findAll();
		responseWrapper.setMessage("User found");;
		responseWrapper.setData(users);
		return new ResponseEntity<>(responseWrapper,HttpStatus.OK);
	}
	
	
	// deleteUser 
	
	public ResponseEntity<?> deleteUser(Long id){
	Optional<User> existingUser = userRepository.findById(id);
	
	if(!existingUser.isPresent()){
		responseWrapper.setMessage("user not found");
		responseWrapper.setData(null);
    	return new ResponseEntity<>(responseWrapper,HttpStatus.NOT_FOUND);		
	}
	userRepository.delete(existingUser.get());
	responseWrapper.setMessage("user deleted sucessfully");
	responseWrapper.setData(null);
	return new ResponseEntity<>(responseWrapper,HttpStatus.OK);		
	}	
	
//	get user by id
	public ResponseEntity<?> getUserById(Long id) {
	    Optional<User> existingUser = userRepository.findById(id);
	    
	    if (!existingUser.isPresent()) {
	        responseWrapper.setMessage("User not found with ID: " + id);
	        responseWrapper.setData(null);
	        return new ResponseEntity<>(responseWrapper, HttpStatus.NOT_FOUND);
	    }
	    
	    responseWrapper.setMessage("User found");
	    responseWrapper.setData(existingUser.get());
	    return new ResponseEntity<>(responseWrapper, HttpStatus.OK);
	}

}


	
	
	

