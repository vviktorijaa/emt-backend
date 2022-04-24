package com.example.emt_lab2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.emt_lab2.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
    void deleteByName(String name);
}