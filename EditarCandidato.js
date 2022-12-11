import axios from "axios";
import { useState,useEffect }  from "react";
import { useNavigate, useParams} from "react-router-dom";
const URI = "http://localhost:8080/candidato/"


let headers = {
    "usuario" : sessionStorage.getItem("usuario"),
    "clave"   : sessionStorage.getItem("clave")
  };
const EditarCandidato = () => {
    const [documento_can, setDocumento_can] = useState("");
    const [nombre_can, setNombre_can] = useState("");
    const [apellido_can, setApellido_can] = useState("");
    const [telefono_can, setTelefono_can] = useState("");
    const [codigo_pro, setCodigo_pro] = useState([])
    const [fecha_nac_can, setFecha_nac_can] = useState([])
    const navigate = useNavigate();

    const {id} = useParams()

    const editar = async (e) => {
        e.preventDefault();
    
        const UpdateCandidato = await axios({
            method: "PUT",
            url: URI,
            data: {
                documento_can: documento_can, nombre_can: nombre_can,  apellido_can:apellido_can , telefono_can:telefono_can, codigo_pro: codigo_pro, fecha_nac_can:fecha_nac_can, candidato: {documento_est:documento_can, telefono_can:null, nombre_can: null, codigo_pro: null}
            },
            headers: headers 
          });
         
        navigate("/candidato");
      };

      useEffect( ()=>{
        getCandidatoById()
    },[])

    const getCandidatoById = async () => {

        const res =  await axios({
            method: "GET",
            url: URI+"list/"+id,
            headers: headers 
          });
        setDocumento_can(res.data.documento_can)
        setNombre_can(res.data.nombre_can)
        setApellido_can(res.data.apellido_can)
        setTelefono_can(res.data.telefono_can)  
        setCodigo_pro(res.data.codigo_pro)  
        setFecha_nac_can(res.data.fecha_nac_can)  
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
                value={documento_can}
                onChange={(e) => setDocumento_can(e.target.value)}
                type="numeric" 
                disabled="false"
                className="form-control"
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Nombre Candidato</label>
            <input 
                value={nombre_can.substring(0,10)}
                onChange={(e) => setNombre_can(e.target.value)}
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
                value={apellido_can}
                onChange={(e) => setApellido_can(e.target.value)}
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
                value={telefono_can}
                onChange={(e) => setTelefono_can(e.target.value)}
                type="number"
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
            <label className="form-label">Fecha Nacimiento</label>
            <input 
                value={fecha_nac_can}
                onChange={(e) => setFecha_nac_can(e.target.value)}
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

export default EditarCandidato
;