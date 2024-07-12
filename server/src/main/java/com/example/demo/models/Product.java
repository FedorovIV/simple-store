package com.example.demo.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    @Column
    private String name;

    @Column(columnDefinition = "text")  
    private String description;

    @Column
    private String price;

    @Column
    private String imgURL;

    @Column
    private String category;

    @Column
    private String brand;


}
