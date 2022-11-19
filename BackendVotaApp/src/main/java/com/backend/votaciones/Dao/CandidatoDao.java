package com.backend.votaciones.Dao;

import org.springframework.data.repository.CrudRepository;

import com.backend.votaciones.Models.Candidato;

public interface CandidatoDao extends CrudRepository<Candidato,Integer> {
    
}
