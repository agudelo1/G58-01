package com.backend.votaciones.Dao;

import org.springframework.data.repository.CrudRepository;

import com.backend.votaciones.Models.Estadistica;

public interface EstadisticaDao extends CrudRepository<Estadistica,Integer> {
    
}
