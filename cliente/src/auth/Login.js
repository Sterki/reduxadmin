import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {mostrarErrorAction, ocultarAlertAction, loginUsuarioaction} from '../actions/userAction';
import {useHistory} from 'react-router-dom';

const Login = () => {


    const dispatch = useDispatch();
    const history = useHistory();
    const mostrarAlerta = (msg, categoria) => dispatch( mostrarErrorAction(msg, categoria) );
    const ocultarAlerta = () => dispatch( ocultarAlertAction() );
    const loginUsuario = (datos) => dispatch( loginUsuarioaction(datos) );
    const mensaje = useSelector( state => state.userdata.mensaje);
    const usuarioautenticado = useSelector( state => state.userdata.autenticado);

    
    useEffect(()=>{

        if(usuarioautenticado){

            history.push('/content');

        }
        if(mensaje){

            mostrarAlerta(mensaje.msg, mensaje.categoria);        
            return;
        }
    }, [usuarioautenticado])


    const [userdata, saveUserData] = useState({

        email: '',
        password: ''
    })
    const handlChange = e =>{

        saveUserData({
            ...userdata,
            [e.target.name]: e.target.value
        })

    }
    const {email, password} = userdata;
    const handleSubtmit = e =>{

        e.preventDefault();

        // validate the form
        if(email.trim() === '' || password.trim() === ''){
            mostrarAlerta('Debe ingresar todos los campos', 'alert-error');
            setTimeout(()=>{

                ocultarAlerta();

            }, 3000)
            return;
        }
        // send to de action 
        loginUsuario({email, password});
       ocultarAlerta();
        // reset form
    }
    return ( 

            <div className="contenedor">
                <div className="contenedor-formulario">
                    {mensaje ?<div className={`alert ${mensaje.categoria}`}>{mensaje.msg}</div> : null}
                        <form
                            onSubmit={handleSubtmit}
                        >
                            <div className="row">
                                <div className="col-md-2 form-group">
                                     <label className="form-group">Email</label>
                                </div>
                                <div className="col-md-10 form-group">
                                            <input
                                                type='text'
                                                className="form-control"
                                                name="email"
                                                onChange={handlChange}
                                            />
                                </div> 
                                <div className="col-md-2 form-group">
                                     <label className="form-group">Password</label>
                                </div>
                                <div className="col-md-10 form-group">
                                            <input
                                                type='password'
                                                className="form-control"
                                                name="password"
                                                onChange={handlChange}
                                            />
                                </div> 
                                <div className="col-md-12 form-group">
                                            <button className="btn btn-primary btn-block">Login</button>    
                                </div> 
                            </div>
                        </form>
                </div>
            </div>

     );
}
 
export default Login;