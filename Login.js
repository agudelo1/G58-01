
import swal from "sweetalert";
import axios from "axios";
import { useState }  from "react";
import { useNavigate } from "react-router-dom";
const URI = "http://localhost:8080/administrador/"

const Login = () => {
    const navigate = useNavigate();
    const [administradores, setAdministradores] = useState([])
    const [documento_adm, setdocumento_adm] = useState("");
    const [clave_adm, setClave_adm] = useState("");
   

    const guardar = async (e) => {
        e.preventDefault();
        
        try {          
            const res = await axios({
                method : "GET",
                url: URI + "login?usuario="+documento_adm+"&clave="+clave_adm
            });
            
            //setClientes(res.data);
            
            if (res.data.documento_adm==null) {
                
                swal("Administrador NO Autorizado!", "Presiona el butón!", "error");
                navigate("/");
                
            } else {
               sessionStorage.setItem("usuario",documento_adm);
               sessionStorage.setItem("clave",clave_adm);
               
               swal("Bienvenido "+ res.data.nombre_adm+"!", "Presiona el botón!", "success");
               navigate("/menu");
            }
            
            
        }
        catch (error) {
            swal("Operación NO realizada!", "Presiona el botón!", "error");
        }

      };

    return(
        <div className="container" >
            <div className="row" id="centrado">
                <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3" >
                    <form onSubmit={guardar} >
                        <fieldset >
                            <h2>Ingreso del Administrador al sistema</h2>
                            <hr className="colorgraph"/>
                            <div className="form-group">
                                <input type="text" 
                                name="id" 
                                id="id" 
                                value={documento_adm} 
                                onChange={(e) => setdocumento_adm(e.target.value)}
                                maxLength={15} 
                                required
                                class="form-control input-lg"
                                onInvalid={e => e.target.setCustomValidity('El campo ID es obligatorio')}
                                onInput={e => e.target.setCustomValidity('')}
                                placeholder="Id Admin"
                                />                            
                            </div><br></br>
                            <div className="form-group">
                                <input type="password" name="password" id="password" 
                                value={clave_adm}
                                onChange={(e) => setClave_adm(e.target.value)}
                                maxLength={50}
                                required
                                onInvalid={e => e.target.setCustomValidity('El campo Contraseña  es obligatorio')}
                                onInput={e => e.target.setCustomValidity('')}
                                class="form-control input-lg" 
                                placeholder="Contraseña"/>
                            </div><br></br>
                            
                            
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <input type="submit" className="btn  btn-success btn-block" value="Ingresar"/>
                                </div>
                                
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

       
    );
};

export default Login;