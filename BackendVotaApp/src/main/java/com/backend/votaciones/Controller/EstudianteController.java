package com.backend.votaciones.Controller;

import java.util.List;

import javax.validation.Valid;

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

import com.backend.votaciones.Models.Estudiante;
import com.backend.votaciones.Security.Hash;
import com.backend.votaciones.Service.EstudianteService;

@RestController
@CrossOrigin("*")
@RequestMapping("/estudiante")
public class EstudianteController {

    @Autowired
    private EstudianteService estudianteService;

    // Método Post para Insertar datos en la tabla de la BD
    @PostMapping(value = "/")
    @ResponseBody
    public ResponseEntity<Estudiante> agregar(@Valid @RequestBody Estudiante estudiante) {
        estudiante.setClave_est(Hash.sha1(estudiante.getClave_est()));
        Estudiante obj = estudianteService.save(estudiante);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    // Método Delete para Eliminar datos en la tabla de la BD
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Estudiante> eliminar(@PathVariable Integer id) {

        Estudiante obj = estudianteService.findById(id);
        if (obj != null) // Encontró al registro
            estudianteService.delete(id);
        else
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(obj, HttpStatus.OK);

    }

    // Método Put para Modificar datos en la tabla de la BD
    @PutMapping(value = "/")
    @ResponseBody
    public ResponseEntity<Estudiante> editar(@Valid @RequestBody Estudiante estudiante) {
        estudiante.setClave_est(Hash.sha1(estudiante.getClave_est()));
        Estudiante obj = estudianteService.findById(estudiante.getDocumento_est());
        if (obj != null) { // Lo encotró
            obj.setNombre_est(estudiante.getNombre_est());
            obj.setApellido_est(estudiante.getApellido_est());
            obj.setTelefono_est(estudiante.getTelefono_est());
            obj.setCorreo_est(estudiante.getCorreo_est());
            obj.setClave_est(estudiante.getClave_est());
            obj.setEstado_voto(estudiante.getEstado_voto());

            estudianteService.save(estudiante);
        } else
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    // Método Put para Modificar datos en la tabla de la BD
    @GetMapping("/list")
    // @ResponseBody
    public List<Estudiante> consultarTodo() {

        return estudianteService.findAll();

    }

    @GetMapping("/list/{id}")
    @ResponseBody
    public Estudiante consultaPorId(@PathVariable Integer id) {
        return estudianteService.findById(id);
    }

}
