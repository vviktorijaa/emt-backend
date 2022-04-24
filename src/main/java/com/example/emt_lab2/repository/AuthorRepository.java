package com.example.emt_lab2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.emt_lab2.model.Author;
import java.util.Optional;

public interface AuthorRepository extends JpaRepository<Author, Long> {

    Optional<Author> findById(Long id);
}