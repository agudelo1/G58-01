import axios from "axios";
import { useState,useEffect }  from "react";
import { useNavigate, useParams} from "react-router-dom";
const URI = "http://localhost:8080/estudiante/"


let headers = {
    "usuario" : sessionStorage.getItem("usuario"),
    "clave"   : sessionStorage.getItem("clave")
  };
const EditarEstudiante = () => {
    const [documento_est, setDocumento_est] = useState("");
    const [nombre_est, setNombre_est] = useState("");
    const [apellido_est, setApellido_est] = useState("");
    const [telefono_est, setTelefono_est] = useState("");
    const [correo_est, setCorreo_est] = useState([])
    const [clave_est, setClave_est] = useState([])
    const [codigo_pro, setCodigo_pro] = useState([])
    const [estado_voto, setEstado_voto] = useState([])
    const navigate = useNavigate();

    const {id} = useParams()

    const editar = async (e) => {
        e.preventDefault();
    
        const UpdateEstudiante = await axios({
            method: "PUT",
            url: URI,
            data: {
                documento_est: documento_est, nombre_est: nombre_est,  clave_est: clave_est, estudiante: {documento_est:documento_est, telefono_est:null, nombre_est: null, clave_estu: null}
            },
            headers: headers 
          });
         
        navigate("/estudiante");
      };

      useEffect( ()=>{
        getEstudianteById()
    },[])

    const getEstudianteById = async () => {

        const res =  await axios({
            method: "GET",
            url: URI+"list/"+id,
            headers: headers 
          });
        setDocumento_est(res.data.documento_est)
        setNombre_est(res.data.nombre_est)
        setApellido_est(res.data.apellido_est)
        setTelefono_est(res.data.telefono_est)  
        setCorreo_est(res.data.correo_est)  
        setClave_est(res.data.clave_est)  
        setCodigo_pro(res.data.codigo_pro)  
        setEstado_voto(res.data.estado_voto)  
    }

    return(
        <div>
        <br></br>
        <h3>Editar Estudiante</h3>
        <div className="container col-6" id="contenedor2">
        <form onSubmit={editar}>
            <div className="mb-3">
            <label className="form-label">ID</label>
            <input 
                value={documento_est}
                onChange={(e) => setDocumento_est(e.target.value)}
                type="numeric" 
                disabled="false"
                className="form-control"
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Nombre Estudiante</label>
            <input 
                value={nombre_est.substring(0,10)}
                onChange={(e) => setNombre_est(e.target.value)}
                type="text"
                className="form-control"
                required
                onInvalid={e => e.target.setCustomValidity('El campo Fecha de Apertura  es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Apellido</label>
            <input 
                value={apellido_est}
                onChange={(e) => setApellido_est(e.target.value)}
                type="text"
                className="form-control"
                required
                disabled="false"
                onInvalid={e => e.target.setCustomValidity('El campo es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Telefono</label>
            <input 
                value={telefono_est}
                onChange={(e) => setTelefono_est(e.target.value)}
                type="number"
                className="form-control"
                required
                disabled="false"
                onInvalid={e => e.target.setCustomValidity('El campo es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Correo</label>
            <input 
                value={correo_est}
                onChange={(e) => setCorreo_est(e.target.value)}
                type="text"
                className="form-control"
                required
                disabled="false"
                onInvalid={e => e.target.setCustomValidity('El campo es obligatorio')}
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
                disabled="false"
                onInvalid={e => e.target.setCustomValidity('El campo es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Codigo</label>
            <input 
                value={codigo_pro}
                onChange={(e) => setCodigo_pro(e.target.value)}
                type="number"
                className="form-control"
                required
                disabled="false"
                onInvalid={e => e.target.setCustomValidity('El campo es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Estado Voto</label>
            <input 
                value={estado_voto}
                onChange={(e) => setEstado_voto(e.target.value)}
                type="number"
                className="form-control"
                required
                disabled="false"
                onInvalid={e => e.target.setCustomValidity('El campo es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
            />
            </div>
            <button type="submit" className="btn btn-success">
            Guardar
            </button>
        </form>
    </div>
    </div>
    );
};

export default EditarEstudiante
;