package com.example.emt_lab2.service.impl;

import com.example.emt_lab2.model.Author;
import com.example.emt_lab2.repository.AuthorRepository;
import com.example.emt_lab2.service.AuthorService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;

    public AuthorServiceImpl(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @Override
    public List<Author> findAll() {
        return this.authorRepository.findAll();
    }
}
