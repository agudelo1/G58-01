import swal from "sweetalert";
import axios from "axios";
import { useState,useEffect }  from "react";
import { Link,useNavigate} from "react-router-dom";
const URI = "http://localhost:8080/estudiante/"


let headers = {
    "usuario" : sessionStorage.getItem("usuario"),
    "clave"   : sessionStorage.getItem("clave")
  };

const MostrarEstudiante = () => {
    const navigate = useNavigate();
    const [estudiante, setEstudiantes] = useState([])
    useEffect(() =>{
        getEstudiantes()
    })

    const getEstudiantes = async () =>{
        try {
            
            const res = await axios({
                method : "GET",
                url : URI + "list",
                headers: headers 
               
            });
            
            setEstudiantes(res.data)
            
            //console.log(estudiante)
        }
        catch (error) {
            swal("No tiene Acceso a esta Opción!", "Presiona el butón!", "error");
            navigate("/");
        }
    }

const deleteEstudiante = async (id) => {
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
                getEstudiantes()
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
                    <h2>Información de estudiantes </h2>
                    <Link to="/crear" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table table-striped table-hover'>
                        <thead className='table-dark'>
                            <tr>
                                <th>Documento</th>
                                <th>Apellido</th>
                                <th>Clave</th>
                                <th>Correo</th>
                                <th>Voto</th>
                                <th>Nombre estudiante</th>
                                <th>Telefono</th>
                                <th>Codigo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { estudiante.map ( (estudiante) => (
                                <tr key={ estudiante.documento_est}>
                                    <td> { estudiante.documento_est} </td>
                                    <td> { estudiante.nombre_est } </td>
                                    <td> { estudiante.clave_est } </td>
                                    <td>
                                        <Link to={`/editar/${estudiante.documento_est}`} ><i className="fa-solid fa-pen-to-square" data-toggle="tooltip" title="Editar" id="editar"></i></Link>
                                        <button id="boton1" onClick={() => deleteEstudiante(estudiante.documento_est)} className='btn btn-danger'><i className="fa-solid fa-trash" data-toggle="tooltip" title="Eliminar" id="eliminar"></i></button>
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

export default MostrarEstudiante;