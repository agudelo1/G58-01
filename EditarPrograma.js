import axios from "axios";
import { useState,useEffect }  from "react";
import { useNavigate, useParams} from "react-router-dom";
const URI = "http://localhost:8080/programa/"


let headers = {
    "usuario" : sessionStorage.getItem("usuario"),
    "clave"   : sessionStorage.getItem("clave")
  };
const EditarPrograma = () => {
    const [codigo_pro, setCodigo_pro] = useState("");
    const [nombre_pro, setNombre_pro] = useState("");
    const [snies_pro, setSnies_pro] = useState("");
    const [codigo_uni, setCodigo_uni] = useState("");
    const navigate = useNavigate();

    const {id} = useParams()

    const editar = async (e) => {
        e.preventDefault();
    
        const UpdatePrograma = await axios({
            method: "PUT",
            url: URI,
            data: {
                codigo_pro: codigo_pro, nombre_pro: nombre_pro, snies_pro: snies_pro, codigo_uni: codigo_uni, programa: {nombre_pro:nombre_pro,}
            },
            headers: headers 
          });
         
        navigate("/programa");
      };

      useEffect( ()=>{
        getProgramaById()
    },[])

    const getProgramaById = async () => {

        const res =  await axios({
            method: "GET",
            url: URI+"list/"+id,
            headers: headers 
          });
        setCodigo_pro(res.data.codigo_pro)
        setNombre_pro(res.data.nombre_pro)
        setSnies_pro(res.data.snies_pro)
        setCodigo_uni(res.data.codigo_uni)
    
    }

    return(
        <div>
        <br></br>
        <h3>Editar Programa</h3>
        <div className="container col-6" id="contenedor2">
        <form onSubmit={editar}>
            <div className="mb-3">
            <label className="form-label">ID</label>
            <input 
                value={codigo_pro}
                onChange={(e) => setCodigo_pro(e.target.value)}
                type="numeric" 
                disabled="false"
                className="form-control"
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Nombre Estudiante</label>
            <input 
                value={nombre_pro.substring(0,10)}
                onChange={(e) => setNombre_pro(e.target.value)}
                type="text"
                className="form-control"
                required
                onInvalid={e => e.target.setCustomValidity('El campo Fecha de Apertura  es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Nombre Estudiante</label>
            <input 
                value={snies_pro.substring(0,10)}
                onChange={(e) => setSnies_pro(e.target.value)}
                type="text"
                className="form-control"
                required
                onInvalid={e => e.target.setCustomValidity('El campo Fecha de Apertura  es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Codigo Universidad</label>
            <input 
                value={codigo_uni.substring(0,10)}
                onChange={(e) => setCodigo_uni(e.target.value)}
                type="number"
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

export default EditarPrograma
;