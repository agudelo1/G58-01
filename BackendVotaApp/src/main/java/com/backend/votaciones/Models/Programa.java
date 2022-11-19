package com.backend.votaciones.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "programa")
public class Programa {
    

    @Id
    @NotEmpty(message = "El campo identificador del programa no debe estar vacio")
    @Column(name="codigo_pro")
    private String codigo_pro;
    @NotEmpty(message = "El campo nombre del programa no debe estar vacio")
    @Size(min = 3, max = 69, message = "El campo nombre del programa debe tener minimo 3 caracteres y maximo 69 caracteres ")
    @Column(name="nombre_pro")
    private String nombre_pro;
    @NotEmpty(message = "El campo SNIES del programa no debe estar vacio")
    @Size(min = 3, max = 49, message = "El campo SNIES del programa debe tener minimo 3 caracteres y maximo 49 caracteres ")
    @Column(name="snies_pro")
    private String snies_pro;
    @ManyToOne
    @JoinColumn(name="codigo_uni")//Solo para las llaves foráneas
    private Universidad universidad; //De esta forma se representa la llave foránea, es decir, creando un objeto de la clase

    @Override
    public String toString() {
        return "Programa [codigo_pro=" + codigo_pro + ", nombre_pro=" + nombre_pro + ", snies_pro=" + snies_pro
                + ", universidad=" + universidad + "]";
    }
     

    
}
