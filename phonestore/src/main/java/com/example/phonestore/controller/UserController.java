package com.example.phonestore.controller;

import com.example.phonestore.exception.ResourceNotFoundException;
import com.example.phonestore.model.User;
import com.example.phonestore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/login")
public class UserController {

    @Autowired
    private UserRepository userRepository;
}
