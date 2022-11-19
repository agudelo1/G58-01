package com.backend.votaciones.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.backend.votaciones.Dao.EstudianteDao;
import com.backend.votaciones.Models.Estudiante;

@Service
public class EstudianteService {

    @Autowired
    private EstudianteDao estudianteDao;

     //Creamos el método para Guardar datos en la Tabla de la BD
     public Estudiante save(Estudiante estudiante) {
        return estudianteDao.save(estudiante);

     }

    //Creamos el método para Eliminar datos en la Tabla de la BD
    @Transactional(readOnly=false)
    public void delete(Integer id) {
        estudianteDao.deleteById(id);
    }


    //Creamos el método para buscar un solo registro en la Tabla de la BD
    @Transactional(readOnly=true)
    public Estudiante findById(Integer id) {
        return estudianteDao.findById(id).orElse(null);
    }


    //Creamos el método para buscar todos los registros en la Tabla de la BD
    @Transactional(readOnly=true)
    public List<Estudiante> findAll() {
        return (List<Estudiante>) estudianteDao.findAll();
    }
    
}
