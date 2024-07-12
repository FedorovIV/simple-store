package com.example.demo.dto;

import lombok.Data;

@Data
public class RegisterDtoRequest {
    private String username;
    private String email;
    private String password;
}
