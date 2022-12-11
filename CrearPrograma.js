import swal from "sweetalert"
import axios from "axios";
import { useState,useEffect }  from "react";
import { useNavigate} from "react-router-dom";
const URI = "http://localhost:8080/candidato/"

let headers = {
    "usuario" : sessionStorage.getItem("usuario"),
    "clave"   : sessionStorage.getItem("clave")
  };
const CrearPrograma = () => {
    const [codigo_pro, setCodigo_pro] = useState("");
    const [nombre_pro, setNombre_pro] = useState("");
    const [snies_pro, setSnies_pro] = useState("");
    const [codigo_uni, setCodigo_uni] = useState("");
    const [clave_can, setClave_can] = useState("");
    const navigate = useNavigate();

    const guardar = async (e) => {
        e.preventDefault();
    
        const insertPrograma = await axios({
            method: "POST",
            url: URI,
            data: {
                codigo_pro:codigo_pro, nombre_pro: nombre_pro, snies_pro:snies_pro, codigo_uni:codigo_uni, clave_can: clave_can
            },
            headers: headers 
          });
         
        navigate("/programas");
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
                value={codigo_pro}
                onChange={(e) => setCodigo_pro(e.target.value)}
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
                value={nombre_pro}
                onChange={(e) => setNombre_pro(e.target.value)}
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

export default CrearPrograma;