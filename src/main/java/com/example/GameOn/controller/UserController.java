	package com.example.GameOn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.GameOn.model.User;
import com.example.GameOn.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin("*") 
public class UserController {
	
	@Autowired
	UserService userService;
	
	
//	getAllUser
	
	 @GetMapping("/users")
	    public ResponseEntity<?> getAllUsers() {
	        return userService.getAllUser();
	    }
	
	@PostMapping("/users")
	public ResponseEntity<?> createUser(@RequestBody @Valid User user)
	{
		return userService.createUser(user);
	}
	
//	update

	@PutMapping("/users/{id}")
	public ResponseEntity<?> updateUser(@PathVariable Long id,@RequestBody User userDetails)
	{
		return userService.updateUser(id, userDetails);
	}
	
// get user by id
	
	@GetMapping("/users/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }
	
	
//	 deleteUser
	 @DeleteMapping("/user/{id}")
	 
	public ResponseEntity<?> deleteUser(@PathVariable Long id){
		return userService.deleteUser(id);
	}
	 
}

