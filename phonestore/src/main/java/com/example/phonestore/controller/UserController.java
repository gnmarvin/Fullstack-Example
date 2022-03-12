package com.example.phonestore.controller;

import com.example.phonestore.model.User;
import com.example.phonestore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/login")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("{email}/{password}")
    public User getUserByEmailAndPassword(@PathVariable String email, @PathVariable String password){
        User user=userRepository.findByEmailAndPassword(email, password);
        return user;
    }
}
