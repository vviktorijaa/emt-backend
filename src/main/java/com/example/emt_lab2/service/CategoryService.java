package com.example.emt_lab2.service;

import com.example.emt_lab2.model.enumerations.Category;
import java.util.List;

public interface CategoryService {

    List<Category> getAllCategories();

    Category findByName(Category name);
}
