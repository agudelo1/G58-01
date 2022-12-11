import swal from "sweetalert";
import axios from "axios";
import { useState,useEffect }  from "react";
import { Link,useNavigate} from "react-router-dom";
const URI = "http://localhost:8080/programa/"


let headers = {
    "usuario" : sessionStorage.getItem("usuario"),
    "clave"   : sessionStorage.getItem("clave")
  };

const MostrarPrograma = () => {
    const navigate = useNavigate();
    const [programa, setPrograma] = useState([])
    useEffect(() =>{
        getProgramas()
    })

    const getProgramas = async () =>{
        try {
            
            const res = await axios({
                method : "GET",
                url : URI + "list",
                headers: headers 
               
            });
            
            setPrograma(res.data)
            
            //console.log(programas)
        }
        catch (error) {
            swal("No tiene Acceso a esta Opción!", "Presiona el butón!", "error");
            navigate("/");
        }
    }

const deletePrograma = async (id) => {
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
                getProgramas()
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
                    <h2>Información de Programas </h2>
                    <Link to="/crear" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table table-striped table-hover'>
                        <thead className='table-dark'>
                            <tr>
                                <th>Codigo Programa</th>
                                <th>Nombre Programa</th>
                                <th>Snies Programa</th>
                                <th>Telefono</th>
                                <th>Codigo Universidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { programa.map ( (programa) => (
                                <tr key={ programa.codigo_pro}>
                                    <td> { programa.codigo_pro} </td>
                                    <td> { programa.nombre_pro } </td>
                                    <td> { programa.snies_pro} </td>
                                    <td> { programa.codigo_uni} </td>
                                    <td> { programa.clave_can } </td>
                                    <td>
                                        <Link to={`/editar/${programa.codigo_pro}`} ><i className="fa-solid fa-pen-to-square" data-toggle="tooltip" title="Editar" id="editar"></i></Link>
                                        <button id="boton1" onClick={() => deletePrograma(programa.codigo_pro)} className='btn btn-danger'><i className="fa-solid fa-trash" data-toggle="tooltip" title="Eliminar" id="eliminar"></i></button>
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

export default MostrarPrograma;