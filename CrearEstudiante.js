import swal from "sweetalert"
import axios from "axios";
import { useState,useEffect }  from "react";
import { useNavigate} from "react-router-dom";
const URI = "http://localhost:8080/estudiante/"

let headers = {
    "usuario" : sessionStorage.getItem("usuario"),
    "clave"   : sessionStorage.getItem("clave")
  };
const CrearEstudiante = () => {
    const [documento_est, setDocumento_est] = useState("");
    const [nombre_est, setNombre_est] = useState("");
    const [clave_est, setClave_est] = useState("");
    const navigate = useNavigate();

    const guardar = async (e) => {
        e.preventDefault();
    
        const insertEstudiante = await axios({
            method: "POST",
            url: URI,
            data: {
                documento_est: documento_est, nombre_est: nombre_est,  clave_est: clave_est
            },
            headers: headers 
          });
         
        navigate("/estudiantes");
      };

    return(
        <div>
        <br></br>    <br></br>
        <h3>Crear Estudiante</h3>
        <div className="container col-6" id="contenedor2">
        <form onSubmit={guardar}>
            <div className="mb-3">
            <label className="form-label">ID</label>
            <input
                value={documento_est}
                onChange={(e) => setDocumento_est(e.target.value)}
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
                value={nombre_est}
                onChange={(e) => setNombre_est(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Digite el Nombre"
                required
                onInvalid={e => e.target.setCustomValidity('El campo Nombre  es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Clave</label>
            <input
                value={clave_est}
                onChange={(e) => setClave_est(e.target.value)}
                type="password"
                className="form-control"
                required
                minlength="6" 

                placeholder="Digite la Contraseña"
                onInvalid={e => e.target.setCustomValidity('El campo clave  es obligatorio, mínimo 6 carcateres')}
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

export default CrearEstudiante;