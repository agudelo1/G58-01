package com.backend.votaciones.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.votaciones.Models.Estadistica;
import com.backend.votaciones.Service.EstadisticaService;

@RestController
@CrossOrigin("*")
@RequestMapping("/estadistica")
public class EstadisticaController {
    
    @Autowired
    private EstadisticaService estadisticaService;

    // Método Post para Insertar datos en la tabla de la BD
    @PostMapping(value = "/")
    @ResponseBody
    public ResponseEntity<Estadistica> agregar(@RequestBody Estadistica estadistica) {
        Estadistica obj = estadisticaService.save(estadistica);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    // Método Delete para Eliminar datos en la tabla de la BD
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Estadistica> eliminar(@PathVariable Integer id) {

       Estadistica obj = estadisticaService.findById(id);
        if (obj != null) // Encontró al registro
        estadisticaService.delete(id);
        else
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(obj, HttpStatus.OK);

    }

    // Método Put para Modificar datos en la tabla de la BD
    @PutMapping(value = "/")
    @ResponseBody
    public ResponseEntity<Estadistica> editar(@RequestBody Estadistica estadistica) {
        Estadistica obj = estadisticaService.findById(estadistica.getIde_est());
        if (obj != null) { // Lo encotró
            obj.setCantidad_votos(estadistica.getCantidad_votos());
            obj.setCantidad_blanco(estadistica.getCantidad_blanco());
            obj.setCantidad_nulos(estadistica.getCantidad_nulos());
         
          
            estadisticaService.save(estadistica);
        } else
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    // Método Put para Modificar datos en la tabla de la BD
    @GetMapping("/list")
    // @ResponseBody
    public List<Estadistica> consultarTodo() {

        return estadisticaService.findAll();

    }

    @GetMapping("/list/{id}")
    @ResponseBody
    public Estadistica consultaPorId(@PathVariable Integer id) {
        return  estadisticaService.findById(id);
    }


}
