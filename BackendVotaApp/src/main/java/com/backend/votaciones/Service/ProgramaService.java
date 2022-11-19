package com.backend.votaciones.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.backend.votaciones.Dao.ProgramaDao;
import com.backend.votaciones.Models.Programa;

@Service
public class ProgramaService {
    
    @Autowired
    private ProgramaDao programaDao;

     //Creamos el método para Guardar datos en la Tabla de la BD
     public Programa save(Programa programa) {
        return programaDao.save(programa);

     }

    //Creamos el método para Eliminar datos en la Tabla de la BD
    @Transactional(readOnly=false)
    public void delete(String id) {
        programaDao.deleteById(id);
    }


    //Creamos el método para buscar un solo registro en la Tabla de la BD
    @Transactional(readOnly=true)
    public Programa findById(String id) {
        return programaDao.findById(id).orElse(null);
    }


    //Creamos el método para buscar todos los registros en la Tabla de la BD
    @Transactional(readOnly=true)
    public List<Programa> findAll() {
        return (List<Programa>) programaDao.findAll();
    }
}
