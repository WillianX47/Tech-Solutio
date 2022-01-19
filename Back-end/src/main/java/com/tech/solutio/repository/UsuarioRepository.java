package com.tech.solutio.repository;

import org.springframework.stereotype.Repository;
import com.tech.solutio.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

}
