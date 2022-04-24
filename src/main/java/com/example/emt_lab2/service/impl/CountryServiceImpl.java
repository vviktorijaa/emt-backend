package com.example.emt_lab2.service.impl;

import com.example.emt_lab2.model.Country;
import com.example.emt_lab2.model.dto.CountryDTO;
import com.example.emt_lab2.repository.CountryRepository;
import com.example.emt_lab2.service.CountryService;
import org.springframework.stereotype.Service;

@Service
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }
}
