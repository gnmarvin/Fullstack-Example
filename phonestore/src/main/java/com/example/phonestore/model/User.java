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
@Table(name="User")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", columnDefinition="bigint", nullable=false)
    private int id;

    @Column(name="username", length=100, nullable=false)
    private String username;

    @Column(name="password", length=100, nullable=false)
    private String password;

    @Column(name="email", length=100, nullable=false)
    private String email;
}
