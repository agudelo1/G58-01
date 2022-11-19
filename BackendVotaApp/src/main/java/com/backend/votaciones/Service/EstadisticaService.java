package com.backend.votaciones.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.backend.votaciones.Dao.EstadisticaDao;
import com.backend.votaciones.Models.Estadistica;

@Service
public class EstadisticaService {

    @Autowired
    private EstadisticaDao estadisticaDao;

    //Creamos el método para Guardar datos en la Tabla de la BD
    public Estadistica save(Estadistica estadistica) {
        return estadisticaDao.save(estadistica);

     }

    //Creamos el método para Eliminar datos en la Tabla de la BD
    @Transactional(readOnly=false)
    public void delete(Integer id) {
        estadisticaDao.deleteById(id);
    }


    //Creamos el método para buscar un solo registro en la Tabla de la BD
    @Transactional(readOnly=true)
    public Estadistica findById(Integer id) {
        return estadisticaDao.findById(id).orElse(null);
    }


    //Creamos el método para buscar todos los registros en la Tabla de la BD
    @Transactional(readOnly=true)
    public List<Estadistica> findAll() {
        return (List<Estadistica>) estadisticaDao.findAll();
    }
    
    
}
