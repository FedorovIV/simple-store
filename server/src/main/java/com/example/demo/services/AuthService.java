package com.example.demo.services;

import com.example.demo.dto.AuthDtoResponse;
import com.example.demo.dto.RegisterDtoRequest;
import com.example.demo.models.User;
import com.example.demo.repositories.UserRepository;
import com.example.demo.utils.JwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public AuthDtoResponse registerUser(RegisterDtoRequest registerDtoRequest) throws Exception {
        if (userRepository.findByUsername(registerDtoRequest.getUsername()).isPresent()) {
            throw new Exception("User with username " + registerDtoRequest.getUsername() + " already exists");
        }

        if (userRepository.findByEmail(registerDtoRequest.getUsername()).isPresent()) {
            throw new Exception("User with email " + registerDtoRequest.getEmail() + " already exists");
        }

        if (!isValidPassword(registerDtoRequest.getPassword())) {
            throw new Exception("Password must be at least 6 characters long");
        }

        User newUser = new User();
        newUser.setUsername(registerDtoRequest.getUsername());
        newUser.setEmail(registerDtoRequest.getEmail());
        newUser.setPassword(passwordEncoder.encode(registerDtoRequest.getPassword()));

        userRepository.save(newUser);

        AuthDtoResponse authDtoResponse = new AuthDtoResponse();
        authDtoResponse.setUser(userService.getInfo(newUser));
        authDtoResponse.setAccessToken(jwtProvider.generateToken(newUser.getUsername()));

        return authDtoResponse;
    }

    public AuthDtoResponse authUser(String username, String password) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User '" + username + "' not found"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new IllegalArgumentException("Incorrect password");
        }

        AuthDtoResponse authDtoResponse = new AuthDtoResponse();
        authDtoResponse.setUser(userService.getInfo(userService.findByUsername(user.getUsername())));
        authDtoResponse.setAccessToken(jwtProvider.generateToken(username));

        return authDtoResponse;
    }

    private boolean isValidPassword(String password) {
        return password.length() >= 6;
    }
}
