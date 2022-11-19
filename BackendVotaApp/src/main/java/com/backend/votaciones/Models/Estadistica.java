package com.backend.votaciones.Models;




import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "estadistica")
public class Estadistica {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ide_est")
    private int ide_est;
    @Column(name="cantidad_votos")
    private int cantidad_votos;
    @Column(name="cantidad_blanco")
    private int cantidad_blanco;
    @Column(name="cantidad_nulos")
    private int cantidad_nulos;
    @ManyToOne
    @JoinColumn(name="documento_can")//Solo para las llaves foráneas
    private Candidato candidato; //De esta forma se representa la llave foránea, es decir, creando un objeto de la clase

    @Override
    public String toString() {
        return "Estadistica [ide_est=" + ide_est + ", cantidad_votos=" + cantidad_votos + ", cantidad_blanco="
                + cantidad_blanco + ", cantidad_nulos=" + cantidad_nulos + ", candidato=" + candidato + "]";
    }


    
}
