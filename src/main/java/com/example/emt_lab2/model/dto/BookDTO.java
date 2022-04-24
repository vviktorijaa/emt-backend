package com.example.emt_lab2.model.dto;

import com.example.emt_lab2.model.enumerations.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class BookDTO {

    private String name;

    private Category category;

    private Long author;

    private Integer availableCopies;
}
