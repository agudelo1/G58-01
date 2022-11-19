package com.backend.votaciones.Dao;

import org.springframework.data.repository.CrudRepository;

import com.backend.votaciones.Models.Programa;

public interface ProgramaDao extends CrudRepository<Programa,String> {
    
}
