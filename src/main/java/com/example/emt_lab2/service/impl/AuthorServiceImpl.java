package com.example.emt_lab2.service.impl;

import com.example.emt_lab2.model.Author;
import com.example.emt_lab2.model.Country;
import com.example.emt_lab2.model.dto.AuthorDTO;
import com.example.emt_lab2.model.exceptions.CountryNotFoundException;
import com.example.emt_lab2.repository.AuthorRepository;
import com.example.emt_lab2.repository.CountryRepository;
import com.example.emt_lab2.service.AuthorService;
import org.springframework.stereotype.Service;
import javax.annotation.PostConstruct;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;
    private final CountryRepository countryRepository;

    public AuthorServiceImpl(AuthorRepository authorRepository, CountryRepository countryRepository) {
        this.authorRepository = authorRepository;
        this.countryRepository = countryRepository;
    }

    @Override
    public List<Author> findAll() {
        return this.authorRepository.findAll();
    }
}
