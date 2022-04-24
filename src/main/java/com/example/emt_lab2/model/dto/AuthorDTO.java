package com.example.emt_lab2.model.dto;

import com.example.emt_lab2.model.Country;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AuthorDTO {

    private String name;

    private String surname;

    private Country country;
}
