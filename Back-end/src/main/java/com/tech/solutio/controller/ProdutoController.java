package com.tech.solutio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tech.solutio.model.Produto;
import com.tech.solutio.service.ProdutoService;

@RestController
@RequestMapping("/produto")
@CrossOrigin("*")
public class ProdutoController {
	
	@Autowired
	private ProdutoService service;
	
	@GetMapping("/{id}")
	public ResponseEntity<Produto> getProdutoById(@PathVariable Long id){
		return service.getProdutoById(id);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Produto>> getAllProdutos(){
		return service.getAllProdutos();
	}
	
	@PostMapping("/add")
	public ResponseEntity<Produto> saveProduto(@RequestBody Produto produto){
		return service.saveProduto(produto);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Object> deleteProduto(@PathVariable Long id){
		return service.deleteProduto(id);
	}
	
	

}
