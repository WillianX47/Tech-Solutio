package com.tech.solutio.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_usuario")
public class Usuario {
	
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
	
	private @NotBlank String nome;
	
	private @NotBlank String senha;
	
	@NotBlank(message = "O atributo usuario é obrigatório!")
	@Email(message = "O atributo usuario deve ser um email valido!")
	private @Size(min = 5, max = 100) String usuario;
	
	@OneToMany(mappedBy = "usuario", cascade = CascadeType.REMOVE)
	@JsonIgnoreProperties({"usuario"})
	private List<Produto> meusProdutos = new ArrayList<>();
	
	public List<Produto> getMeusProdutos() {
		return meusProdutos;
	}

	public void setMeusProdutos(List<Produto> meusProdutos) {
		this.meusProdutos = meusProdutos;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	
}
