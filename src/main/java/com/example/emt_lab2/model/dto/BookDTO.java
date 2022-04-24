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

//    public BookDTO(String name, Category category, Long author, Integer availableCopies) {
//        this.name = name;
//        this.category = category;
//        this.author = author;
//        this.availableCopies = availableCopies;
//    }
}
