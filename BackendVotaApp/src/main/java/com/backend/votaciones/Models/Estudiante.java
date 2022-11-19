package com.backend.votaciones.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
//import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "estudiante")
public class Estudiante {

    @Id
    @NotNull(message = "El campo identificacion del estudiante no debe estar vacio")
    @Min(value = 11111111 , message = "el campo de indentificacion debe tener entre  8 a 10 digitos")
    @Max( value = 1999999999 , message = "el campo de indentificacion debe tener entre  8 a 10 digitos")
    //@Size(min = 8, max = 10, message = "El campo documento  debe tener minimo 8 digitos y maximo 10 digitos ")
    @Column(name="documento_est")
    private int documento_est;
    @NotEmpty(message = "El campo nombre del estudiante  no debe estar vacio")
    @Size(min = 3, max = 45, message = "El campo nombre del estudiante  debe tener minimo 3 caracteres y maximo 45 caracteres ")
    @Column(name="nombre_est")
    private String nombre_est;
    @NotEmpty(message = "El campo apellido del estudiante  no debe estar vacio")
    @Size(min = 3, max = 45, message = "El campo apellido del estudiante  debe tener minimo 3 caracteres y maximo 45 caracteres ")
    @Column(name="apellido_est")
    private String apellido_est;
    @Column(name="telefono_est")        
    private int telefono_est;
    @Email (message ="el campo email debe tener un formato valido xxx@xxx.xx")
    @Column(name="correo_est")
    private String correo_est;
    @NotEmpty(message = "El campo clave estudiante no debe estar vacio")
    //@Size(min = 5, max = 10, message = "la clave del estudiante debe tener de 5 caracteres y maximo 10 caracteres ")
    @Size(min = 5, message = "La clave  del estudiante  debe tener minimo 3 caracteres y maximo 10 caracteres para inferior ")
    //@Size(max = 11, message = "La clave  del estudiante  debe tener minimo 3 caracteres y maximo 10 caracteres para superior ")
    @Column(name="clave_est")
    private String clave_est;
    @NotNull(message = "El campo  estado del voto  no debe estar vacio")
    @Column(name="estado_voto")
    private int estado_voto;
    @ManyToOne
    @JoinColumn(name="codigo_pro")//Solo para las llaves foráneas
    private Programa programa; //De esta forma se representa la llave foránea, es decir, creando un objeto de la clase

    @Override
    public String toString() {
        return "Estudiante [documento_est=" + documento_est + ", nombre_est=" + nombre_est + ", apellido_est="
                + apellido_est + ", telefono_est=" + telefono_est + ", correo_est=" + correo_est + ", clave_est="
                + clave_est + ", estado_voto=" + estado_voto + ", programa=" + programa + "]";
    }

    

    
}
