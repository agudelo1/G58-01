import swal from "sweetalert"
import axios from "axios";
import { useState,useEffect }  from "react";
import { useNavigate} from "react-router-dom";
const URI = "http://localhost:8080/candidato/"

let headers = {
    "usuario" : sessionStorage.getItem("usuario"),
    "clave"   : sessionStorage.getItem("clave")
  };
const CrearCandidato = () => {
    const [documento_can, setDocumento_can] = useState("");
    const [nombre_can, setNombre_can] = useState("");
    const [apellido_can, setApellido_can] = useState("");
    const [telefono_can, setTelefono_can] = useState("");
    const [codigo_pro, setCodigo_pro] = useState("");
    const [fecha_nac_can, setFecha_nac_can] = useState("");
    const [clave_can, setClave_can] = useState("");
    const navigate = useNavigate();

    const guardar = async (e) => {
        e.preventDefault();
    
        const insertCandidato = await axios({
            method: "POST",
            url: URI,
            data: {
                documento_can: documento_can, nombre_can: nombre_can, apellido_can:apellido_can, telefono_can:telefono_can, codigo_pro:codigo_pro, fecha_nac_can:fecha_nac_can, clave_can: clave_can
            },
            headers: headers 
          });
         
        navigate("/candidatos");
      };

    return(
        <div>
        <br></br>    <br></br>
        <h3>Crear Candidato</h3>
        <div className="container col-6" id="contenedor2">
        <form onSubmit={guardar}>
            <div className="mb-3">
            <label className="form-label">ID</label>
            <input
                value={documento_can}
                onChange={(e) => setDocumento_can(e.target.value)}
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
                value={nombre_can}
                onChange={(e) => setNombre_can(e.target.value)}
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
                value={clave_can}
                onChange={(e) => setClave_can(e.target.value)}
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

export default CrearCandidato;