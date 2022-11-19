package com.backend.votaciones.Dao;

import org.springframework.data.repository.CrudRepository;

import com.backend.votaciones.Models.Estudiante;

public interface EstudianteDao extends CrudRepository<Estudiante,Integer> {
    
}
