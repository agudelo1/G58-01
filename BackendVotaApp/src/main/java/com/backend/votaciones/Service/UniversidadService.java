package com.backend.votaciones.Service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.backend.votaciones.Dao.UniversidadDao;
import com.backend.votaciones.Models.Universidad;

@Service
public class UniversidadService {


    @Autowired
    private UniversidadDao universidadDao;

     //Creamos el método para Guardar datos en la Tabla de la BD
     public Universidad save(Universidad universidad) {
        return universidadDao.save(universidad);

     }

    //Creamos el método para Eliminar datos en la Tabla de la BD
    @Transactional(readOnly=false)
    public void delete(Integer id) {
        universidadDao.deleteById(id);
    }


    //Creamos el método para buscar un solo registro en la Tabla de la BD
    @Transactional(readOnly=true)
    public Universidad findById(Integer id) {
        return universidadDao.findById(id).orElse(null);
    }


    //Creamos el método para buscar todos los registros en la Tabla de la BD
    @Transactional(readOnly=true)
    public List<Universidad> findAll() {
        return (List<Universidad>) universidadDao.findAll();
    }
    
}
