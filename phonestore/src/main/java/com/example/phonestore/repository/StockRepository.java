package com.example.phonestore.repository;

import com.example.phonestore.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface StockRepository extends JpaRepository<Stock, Integer> {
}
