package com.backend.votaciones.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.backend.votaciones.Dao.CandidatoDao;
import com.backend.votaciones.Models.Candidato;

@Service
public class CandidatoService {

    @Autowired
    private CandidatoDao candidatoDao;

    //Creamos el método para Guardar datos en la Tabla de la BD
    public Candidato save(Candidato candidato) {
        return candidatoDao.save(candidato);

     }

    //Creamos el método para Eliminar datos en la Tabla de la BD
    @Transactional(readOnly=false)
    public void delete(Integer id) {
        candidatoDao.deleteById(id);
    }


    //Creamos el método para buscar un solo registro en la Tabla de la BD
    @Transactional(readOnly=true)
    public Candidato findById(Integer id) {
        return candidatoDao.findById(id).orElse(null);
    }


    //Creamos el método para buscar todos los registros en la Tabla de la BD
    @Transactional(readOnly=true)
    public List<Candidato> findAll() {
        return (List<Candidato>) candidatoDao.findAll();
    }
    
    
}
