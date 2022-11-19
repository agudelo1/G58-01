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

import com.backend.votaciones.Models.Universidad;
import com.backend.votaciones.Service.UniversidadService;

@RestController
@CrossOrigin("*")
@RequestMapping("/universidad")
public class UniversidadController {

    @Autowired
    private UniversidadService universidadService;
    
    //Método Post para Insertar datos en la tabla de la BD
    @PostMapping(value="/")
    @ResponseBody
    public ResponseEntity<Universidad> agregar(@Valid @RequestBody Universidad universidad){   
        Universidad obj = universidadService.save(universidad);
        return new ResponseEntity<>(obj, HttpStatus.OK);     
    }
   

    //Método Delete para Eliminar datos en la tabla de la BD
    @DeleteMapping(value="/{id}") 
    public ResponseEntity<Universidad> eliminar(@PathVariable Integer id){ 
        
            Universidad obj = universidadService.findById(id); 
            if(obj!=null) //Encontró al registro
            universidadService.delete(id);
            else 
                return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR); 
            return new ResponseEntity<>(obj, HttpStatus.OK); 
 
    }
    

    //Método Put para Modificar datos en la tabla de la BD
    @PutMapping(value="/") 
    @ResponseBody
    public ResponseEntity<Universidad> editar(@Valid @RequestBody Universidad universidad){ 
        Universidad obj = universidadService.findById(universidad.getCodigo_uni()); 
        if(obj!=null) { //Lo encotró
            obj.setNombre_uni(universidad.getNombre_uni());
            universidadService.save(universidad); 
        } 
        else 
        return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR); 
        return new ResponseEntity<>(obj, HttpStatus.OK); 
    }
   

    //Método Put para Modificar datos en la tabla de la BD
    @GetMapping("/list") 
    //@ResponseBody
    public List<Universidad> consultarTodo(){
        
        return universidadService.findAll();
          
    }
    
    @GetMapping("/list/{id}") 
    @ResponseBody
    public Universidad consultaPorId(@PathVariable Integer id){ 
        return universidadService.findById(id); 
    }
    
    
}
