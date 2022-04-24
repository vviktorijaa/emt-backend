package com.example.emt_lab2.service;

import com.example.emt_lab2.model.Book;
import com.example.emt_lab2.model.dto.BookDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.Optional;

public interface BookService {

    List<Book> findAll();

    Page<Book> findAllWithPagination(Pageable pageable);

    Optional<Book> findById(Long id);

    void deleteById(Long id);

    Optional<Book> save(BookDTO bookDto);

    Optional<Book> edit(Long id, BookDTO bookDTO);

    Optional<Book> markAsTaken(Long id);
}
