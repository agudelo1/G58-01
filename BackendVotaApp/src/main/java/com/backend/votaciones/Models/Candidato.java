package com.backend.votaciones.Models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "candidato")
public class Candidato {

    
    
    @Id
    @NotNull(message = "El campo identificador del candidato  no debe estar vacio")
    @Min(value = 11111111 , message = "el documento de indentificacion del candidato debe tener entre 8 a 10 digitos")
    @Max( value = 1999999999, message = "el documento de indentificacion del candidato debe tener entre 8 a 10 digitos")
    //@NotEmpty(message = "El campo identificador del programa no debe estar vacio") // arroja error 
    //@Size(min = 8, max = 10, message = "El campo nombre del candidato debe tener minimo 3 caracteres y maximo 45 caracteres ")
    @Column(name="documento_can")
    private int documento_can;
    @NotEmpty(message = "El campo nombre del candidato  no debe estar vacio")
    @Size(min = 3, max = 45, message = "El campo nombre del candidato debe tener minimo 3 caracteres y maximo 45 caracteres ")
    @Column(name="nombre_can")
    private String nombre_can;
    @NotEmpty(message = "El campo apellido del candidato  no debe estar vacio")
    @Size(min = 3, max = 45, message = "El campo apellido del candidato debe tener minimo 3 caracteres y maximo 45 caracteres ")
    @Column(name="apellido_can")
    private String apellido_can;
    @Column(name="fechaNac_can") // nota se crea el campo fecha_nac_can en la bd mysql pero se llena con get de fechaNac_can
    private String fechaNac_can;
    @Column(name="telefono_can")        
    private int telefono_can;    
    @ManyToOne
    @JoinColumn(name="codigo_pro")//Solo para las llaves foráneas
    private Programa programa; //De esta forma se representa la llave foránea, es decir, creando un objeto de la clase

 
    @Override
    public String toString() {
        return "Candidato [documento_can=" + documento_can + ", nombre_can=" + nombre_can + ", apellido_can="
                + apellido_can + ", fechaNac_can=" + fechaNac_can + ", telefono_can=" + telefono_can + ", programa="
                + programa + "]";
    }


    


    
    
}
