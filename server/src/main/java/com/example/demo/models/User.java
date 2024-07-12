package com.example.demo.models;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    @Column(unique = true)
    private String username;

    @Column
    private String password;

    @Column(unique = true)
    private String email;

    @Column
    private String deliveryAddress;

    @Column
    private String phoneNumber;

    @Column
    private boolean isProfileCreated;

    public void setIsProfileCreated(boolean value) {
        isProfileCreated = value;
    }
    public boolean getIsProfileCreated() {
        return isProfileCreated;
    }
}
