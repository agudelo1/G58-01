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

import com.backend.votaciones.Models.Programa;
import com.backend.votaciones.Service.ProgramaService;

@RestController
@CrossOrigin("*")
@RequestMapping("/programa")
public class ProgramaController {

    @Autowired
    private ProgramaService programaService;
    
    //Método Post para Insertar datos en la tabla de la BD
    @PostMapping(value="/")
    @ResponseBody
    public ResponseEntity<Programa> agregar(@Valid @RequestBody Programa programa){   
        Programa obj = programaService.save(programa);
        return new ResponseEntity<>(obj, HttpStatus.OK);     
    }
   

    //Método Delete para Eliminar datos en la tabla de la BD
    @DeleteMapping(value="/{id}") 
    public ResponseEntity<Programa> eliminar(@PathVariable String id){ 
        
        Programa obj = programaService.findById(id); 
            if(obj!=null) //Encontró al registro
            programaService.delete(id);
            else 
                return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR); 
            return new ResponseEntity<>(obj, HttpStatus.OK); 
 
    }
    

    //Método Put para Modificar datos en la tabla de la BD
    @PutMapping(value="/") 
    @ResponseBody
    public ResponseEntity<Programa> editar(@Valid @RequestBody Programa programa){ 
        Programa obj = programaService.findById(programa.getCodigo_pro()); 
        if(obj!=null) { //Lo encotró
            
            obj.setNombre_pro(programa.getNombre_pro());
            obj.setSnies_pro(programa.getSnies_pro());
             programaService.save(programa); 
        } 
        else 
        return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR); 
        return new ResponseEntity<>(obj, HttpStatus.OK); 
    }
   

    //Método Put para Modificar datos en la tabla de la BD
    @GetMapping("/list") 
    //@ResponseBody
    public List<Programa> consultarTodo(){
        
        return programaService.findAll();
          
    }
    
    @GetMapping("/list/{id}") 
    @ResponseBody
    public Programa consultaPorId(@PathVariable String id){ 
        return programaService.findById(id); 
    }
    
    
}
