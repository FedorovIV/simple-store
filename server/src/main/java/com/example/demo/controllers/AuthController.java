package com.example.demo.controllers;

import com.example.demo.dto.AuthDtoResponse;
import com.example.demo.dto.LoginDtoRequest;
import com.example.demo.dto.RegisterDtoRequest;
import com.example.demo.models.User;
import com.example.demo.services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDtoRequest loginDtoRequest) {
        try {
            AuthDtoResponse authDtoResponse = authService.authUser(
                    loginDtoRequest.getUsername(),
                    loginDtoRequest.getPassword()
            );
            return ResponseEntity.ok(authDtoResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error during user authentication: " + e.getMessage());
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterDtoRequest registerDtoRequest) throws Exception {

        try {
            AuthDtoResponse authDtoResponse = authService.registerUser(registerDtoRequest);
            return ResponseEntity.ok(authDtoResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error during user registration: " + e.getMessage());
        }
    }
}


