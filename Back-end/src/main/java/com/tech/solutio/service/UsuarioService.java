package com.tech.solutio.service;

import java.nio.charset.Charset;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.apache.commons.codec.binary.Base64;

import com.tech.solutio.model.UserLogin;
import com.tech.solutio.model.Usuario;
import com.tech.solutio.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repository;
	
	public Optional<Object> cadastrarUsuario(Usuario usuario) {
		return repository.findByUsuario(usuario.getUsuario()).map(resp -> {
			return Optional.empty();
		}).orElseGet(() -> {
			usuario.setSenha(bcrypt(usuario.getSenha()));
			return Optional.ofNullable(repository.save(usuario));
		});

	}

	public String bcrypt(String senha) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder.encode(senha);
	}

	public String gerarToken(String email, String senha) {
		String auth = email + ":" + senha;
		byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
		return "Basic " + new String(encodedAuth);
	}

	public Optional<UserLogin> logar(Optional<UserLogin> user) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		Optional<Usuario> usuario = repository.findByUsuario(user.get().getUsuario());
		if (usuario.isPresent()) {
			if (encoder.matches(user.get().getSenha(), usuario.get().getSenha())) {
				user.get().setToken(gerarToken(user.get().getUsuario(), user.get().getSenha()));
				user.get().setUsuario(usuario.get().getUsuario());
				user.get().setId(usuario.get().getId());
				user.get().setNome(usuario.get().getNome());
				user.get().setSenha(usuario.get().getSenha());
				return user;
			} else {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Senha incorreta!");
			}
		}
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email incorreto!");
	}
}
