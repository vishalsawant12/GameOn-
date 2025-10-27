package com.example.GameOn.repository;

import java.util.Optional;

//import java.util.Optional; 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.GameOn.model.User;
import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<User,Long>{
		
	Optional<User> findByUsername(String username);
	Optional<User> findByEmail (String email);
	

}
