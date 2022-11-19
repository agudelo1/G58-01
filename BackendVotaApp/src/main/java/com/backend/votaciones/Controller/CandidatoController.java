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

import com.backend.votaciones.Models.Candidato;
import com.backend.votaciones.Service.CandidatoService;

@RestController
@CrossOrigin("*")
@RequestMapping("/candidato")
public class CandidatoController {



    @Autowired
    private CandidatoService candidatoService;

    // Método Post para Insertar datos en la tabla de la BD
    @PostMapping(value = "/")
    @ResponseBody
    public ResponseEntity<Candidato> agregar(@Valid @RequestBody Candidato candidato) {
        Candidato obj = candidatoService.save(candidato);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    // Método Delete para Eliminar datos en la tabla de la BD
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Candidato> eliminar(@PathVariable Integer id) {

        Candidato obj = candidatoService.findById(id);
        if (obj != null) // Encontró al registro
        candidatoService.delete(id);
        else
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(obj, HttpStatus.OK);

    }

    // Método Put para Modificar datos en la tabla de la BD
    @PutMapping(value = "/")
    @ResponseBody
    public ResponseEntity<Candidato> editar(@Valid @RequestBody Candidato candidato) {
        Candidato obj = candidatoService.findById(candidato.getDocumento_can());
        if (obj != null) { // Lo encotró
            obj.setNombre_can(candidato.getNombre_can());
            obj.setApellido_can(candidato.getApellido_can());
            obj.setFechaNac_can(candidato.getFechaNac_can());
            obj.setTelefono_can(candidato.getTelefono_can());
          
            candidatoService.save(candidato);
        } else
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    // Método Put para Modificar datos en la tabla de la BD
    @GetMapping("/list")
    // @ResponseBody
    public List<Candidato> consultarTodo() {

        return candidatoService.findAll();

    }

    @GetMapping("/list/{id}")
    @ResponseBody
    public Candidato consultaPorId(@PathVariable Integer id) {
        return candidatoService.findById(id);
    }

    
}
