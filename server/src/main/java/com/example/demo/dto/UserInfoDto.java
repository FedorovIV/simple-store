package com.example.demo.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserInfoDto {
    private boolean isProfileCreated;
    private String deliveryAddress;
    private String phoneNumber;
    private String email;
    private String username;
}
