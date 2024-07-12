package com.example.demo.dto;

import com.example.demo.models.User;
import lombok.Data;

@Data
public class AuthDtoResponse {

    private String accessToken;
    private UserInfoDto user;
}
