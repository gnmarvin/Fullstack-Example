package com.example.phonestore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Purchase_item")
public class Purchase_Item {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", columnDefinition="bigint", nullable=false)
    private int id;

    @Column(name="user_id", columnDefinition="bigint", nullable=false)
    private int user_id;

    @ManyToOne(fetch=FetchType.LAZY, optional=false)
    @JoinColumn(name="item_id", columnDefinition="bigint", nullable=false)
    @OnDelete(action=OnDeleteAction.CASCADE)
    private Stock stock;

    @Column(name="quantity", columnDefinition="bigint", nullable=false)
    private int quantity;

    @Column(name="date", columnDefinition="date", nullable=false)
    private  java.sql.Date date;
}
