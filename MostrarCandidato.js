import swal from "sweetalert";
import axios from "axios";
import { useState,useEffect }  from "react";
import { Link,useNavigate} from "react-router-dom";
const URI = "http://localhost:8080/candidato/"


let headers = {
    "usuario" : sessionStorage.getItem("usuario"),
    "clave"   : sessionStorage.getItem("clave")
  };

const MostrarCandidato = () => {
    const navigate = useNavigate();
    const [candidato, setCandidatos] = useState([])
    useEffect(() =>{
        getCandidatos()
    })

    const getCandidatos = async () =>{
        try {
            
            const res = await axios({
                method : "GET",
                url : URI + "list",
                headers: headers 
               
            });
            
            setCandidatos(res.data)
            
            //console.log(candidatos)
        }
        catch (error) {
            swal("No tiene Acceso a esta Opción!", "Presiona el butón!", "error");
            navigate("/");
        }
    }

const deleteCandidato = async (id) => {
    swal(
        {
            title: "Eliminar Registro",
            text: "Está seguro de eliminar registro?",
            icons: "Warning",
            buttons: true,
            dangerMode: true,
        })
        .then(async (willDelete) =>{
            if (willDelete){
                const res = await axios({
                    method: "DELETE",
                    url: URI + id,
                    headers: headers 
                });
                swal("El resgistro se eliminó satisfactoriamente",{ 
                    icon: "success",
                });
                getCandidatos()
            } else{
                swal("El registro no se borró")
            }
        });
    
}
 
const salir = () => {
    navigate("/menu")
}
return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <br></br>
                    <br></br>
                    <h2>Información de candidatos </h2>
                    <Link to="/crear" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table table-striped table-hover'>
                        <thead className='table-dark'>
                            <tr>
                                <th>Documento</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Telefono</th>
                                <th>Codigo Prof</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { candidato.map ( (candidato) => (
                                <tr key={ candidato.documento_can}>
                                    <td> { candidato.documento_can} </td>
                                    <td> { candidato.nombre_can } </td>
                                    <td> { candidato.clave_can } </td>
                                    <td>
                                        <Link to={`/editar/${candidato.documento_can}`} ><i className="fa-solid fa-pen-to-square" data-toggle="tooltip" title="Editar" id="editar"></i></Link>
                                        <button id="boton1" onClick={() => deleteCandidato(candidato.documento_can)} className='btn btn-danger'><i className="fa-solid fa-trash" data-toggle="tooltip" title="Eliminar" id="eliminar"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
            <form className="d-flex">
                <button className="btn btn-primary" type="button" onClick={salir}>
                    Regresar
                </button>
            </form>
        </div>
    );
};

export default MostrarCandidato;