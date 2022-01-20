package com.tech.solutio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.tech.solutio.model.Produto;
import com.tech.solutio.repository.ProdutoRepository;

@Service
public class ProdutoService {

	@Autowired
	private ProdutoRepository repository;

	public ResponseEntity<List<Produto>> getAllProdutos() {
		List<Produto> listaProduto = repository.findAll();
		if (listaProduto.isEmpty()) {
			return ResponseEntity.status(204).build();
		} else {
			return ResponseEntity.ok(listaProduto);
		}
	}

	public ResponseEntity<Produto> getProdutoById(Long id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.status(404).build());
	}

	public ResponseEntity<Produto> saveProduto(Produto produto) {
		return ResponseEntity.ok(repository.save(produto));
	}

	public ResponseEntity<Object> deleteProduto(Long id) {
		return repository.findById(id).map(resp -> {
			repository.deleteById(id);
			return ResponseEntity.status(200).build();
		}).orElseThrow(() -> {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Não existe um produto com esse id");
		});
	}

}
