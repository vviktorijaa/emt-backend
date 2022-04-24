package com.example.emt_lab2.service.impl;

import com.example.emt_lab2.model.enumerations.Category;
import com.example.emt_lab2.model.exceptions.CategoryNotFoundException;
import com.example.emt_lab2.service.CategoryService;
import org.springframework.stereotype.Service;
import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final List<Category> categoryList =new ArrayList<>();

    @PostConstruct
    void setCategoryList(){
        categoryList.addAll(Arrays.asList(Category.values()));
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryList;
    }

    @Override
    public Category findByName(Category name) {
        return categoryList.stream().filter(c -> c.equals(name)).findFirst().orElseThrow(CategoryNotFoundException::new);
    }
}