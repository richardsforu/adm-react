package com.cts.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.product.dao.ProductDao;
import com.cts.product.entity.Product;

@RestController
@CrossOrigin
@RequestMapping("/api/products")
public class ProductRestController {

	@Autowired
	private ProductDao prodDao;

	@PostMapping
	public Product save(@RequestBody Product product) {
		return prodDao.save(product);
	}
	
	@GetMapping("/{id}")
	public Product findById(@PathVariable int id) {
		return prodDao.findById(id).orElse(null);
	}
	
	
	@GetMapping
	public List<Product> listAllProducts(){
		
		return  prodDao.findAll();
	}
	

}
