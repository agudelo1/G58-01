import axios from "axios";
import { useState,useEffect }  from "react";
import { useNavigate, useParams} from "react-router-dom";
const URI = "http://localhost:8080/universidad/"


let headers = {
    "usuario" : sessionStorage.getItem("usuario"),
    "clave"   : sessionStorage.getItem("clave")
  };
const EditarUniversidad = () => {
    const [codigo_uni, setCodigo_uni] = useState("");
    const [nombre_uni, setNombre_uni] = useState("");
    const navigate = useNavigate();

    const {id} = useParams()

    const editar = async (e) => {
        e.preventDefault();
    
        const UpdateUniversidad = await axios({
            method: "PUT",
            url: URI,
            data: {
                codigo_uni: codigo_uni, nombre_uni: nombre_uni, universidad: {nombre_uni:nombre_uni,}
            },
            headers: headers 
          });
         
        navigate("/universidad");
      };

      useEffect( ()=>{
        getUniversidadById()
    },[])

    const getUniversidadById = async () => {

        const res =  await axios({
            method: "GET",
            url: URI+"list/"+id,
            headers: headers 
          });
        setCodigo_uni(res.data.codigo_uni)
        setNombre_uni(res.data.nombre_uni)
    
    }

    return(
        <div>
        <br></br>
        <h3>Editar Universidad</h3>
        <div className="container col-6" id="contenedor2">
        <form onSubmit={editar}>
            <div className="mb-3">
            <label className="form-label">ID</label>
            <input 
                value={codigo_uni}
                onChange={(e) => setCodigo_uni(e.target.value)}
                type="numeric" 
                disabled="false"
                className="form-control"
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Nombre Estudiante</label>
            <input 
                value={nombre_uni.substring(0,10)}
                onChange={(e) => setNombre_uni(e.target.value)}
                type="text"
                className="form-control"
                required
                onInvalid={e => e.target.setCustomValidity('El campo Fecha de Apertura  es obligatorio')}
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

export default EditarUniversidad
;