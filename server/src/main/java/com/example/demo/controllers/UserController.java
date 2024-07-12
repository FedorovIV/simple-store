package com.example.demo.controllers;

import com.example.demo.dto.CreateProfileDto;
import com.example.demo.dto.UserInfoDto;
import com.example.demo.models.User;
import com.example.demo.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getInfo")
    public ResponseEntity<?> checkAuth () {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findByUsername(auth.getName());

        UserInfoDto userDto = userService.getInfo(user);
        return ResponseEntity.ok(Collections.singletonMap("user", userDto));
    }

    @PostMapping("/createProfile")
    public ResponseEntity<?> createProfile(@RequestBody CreateProfileDto createProfileDto){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findByUsername(auth.getName());
        user.setDeliveryAddress(createProfileDto.getAddress());
        user.setPhoneNumber(createProfileDto.getPhoneNumber());
        user.setIsProfileCreated(true);
        userService.save(user);
        Map<String, Object> response = new HashMap<>();
        response.put("user", userService.getInfo(user));
        return ResponseEntity.ok(response);
    }
}
