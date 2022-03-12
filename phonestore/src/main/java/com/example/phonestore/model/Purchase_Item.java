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
@Table(name="purchase_item")
public class Purchase_Item {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", columnDefinition="bigint", nullable=false)
    private int id;

    @Column(name="user_id", columnDefinition="bigint", nullable=false)
    private int user_id;

    @Column(name="item_id", columnDefinition="bigint", nullable=false)
    private int item_id;

    @Column(name="quantity", columnDefinition="bigint", nullable=false)
    private int quantity;

    @Column(name="date", columnDefinition="date", nullable=false)
    private  java.sql.Date date;
}
