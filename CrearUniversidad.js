import swal from "sweetalert"
import axios from "axios";
import { useState,useEffect }  from "react";
import { useNavigate} from "react-router-dom";
const URI = "http://localhost:8080/universidad/"

let headers = {
    "usuario" : sessionStorage.getItem("usuario"),
    "clave"   : sessionStorage.getItem("clave")
  };
const CrearUniversidad = () => {
    const [codigo_uni, setCodigo_uni] = useState("");
    const [nombre_uni, setNombre_uni] = useState("");
   
    const navigate = useNavigate();

    const guardar = async (e) => {
        e.preventDefault();
    
        const insertUniversidad = await axios({
            method: "POST",
            url: URI,
            data: {
                codigo_uni:codigo_uni, nombre_uni: nombre_uni,
            },
            headers: headers 
          });
         
        navigate("/");
      };

    return(
        <div>
        <br></br>    <br></br>
        <h3>Crear Programa</h3>
        <div className="container col-6" id="contenedor2">
        <form onSubmit={guardar}>
            <div className="mb-3">
            <label className="form-label">ID</label>
            <input
                value={codigo_uni}
                onChange={(e) => setCodigo_uni(e.target.value)}
                type="numeric"
                placeholder="Digite el Identificador" 
                className="form-control"
                required
                onInvalid={e => e.target.setCustomValidity('El campo Identificador  es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}

            />
            </div>
            <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
                value={nombre_uni}
                onChange={(e) => setNombre_uni(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Digite el Nombre"
                required
                onInvalid={e => e.target.setCustomValidity('El campo Nombre  es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
            />
            </div>
            <button type="submit" className="btn btn-warning">
            Guardar
            </button>
        </form>
    </div>
    </div>
    );
};

export default CrearUniversidad;