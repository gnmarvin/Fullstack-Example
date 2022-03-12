package com.example.phonestore.controller;

import com.example.phonestore.exception.ResourceNotFoundException;
import com.example.phonestore.model.Stock;
import com.example.phonestore.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/stock")
public class StockController {

    @Autowired
    private StockRepository stockRepository;

    @GetMapping
    public List<Stock> getAllStock(){
        return stockRepository.findAll();
    }

    @PostMapping
    public Stock createStock(@RequestBody Stock stock){
        return stockRepository.save(stock);
    }

    @GetMapping("{id}")
    public ResponseEntity<Stock> getStockById(@PathVariable int id){
        Stock stock=stockRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Error"));
        return ResponseEntity.ok(stock);
    }

    @PutMapping("{id}")
    public ResponseEntity<Stock> updateStock(@PathVariable int id, @RequestBody Stock stockDetails){
        Stock updateStock=stockRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Error"));
        updateStock.setName(stockDetails.getName());
        updateStock.setQuantity(stockDetails.getQuantity());
        updateStock.setPrice(stockDetails.getPrice());
        stockRepository.save(updateStock);
        return ResponseEntity.ok(updateStock);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteStock(@PathVariable int id){
        Stock stock=stockRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Error"));
        stockRepository.delete(stock);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
