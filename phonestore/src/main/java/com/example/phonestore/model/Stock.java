package com.example.phonestore.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Stock")
public class Stock {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", columnDefinition="bigint", nullable=false)
    private int id;

    @Column(name="name", length=100, nullable=false)
    private String name;

    @Column(name="quantity", columnDefinition="bigint", nullable=false)
    private int quantity;

    @Column(name="price", columnDefinition="double", nullable=false)
    private int price;
}
