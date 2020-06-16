import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { creaUsuariosAction, mostrarUsuarioAction} from '../../actions/userAction';


const CrearUsuarios = () => {

    const dispatch = useDispatch()

    const creausuarios = (datos) => dispatch( creaUsuariosAction(datos) );
    const mostrarAdministraUsuarios = () => dispatch( mostrarUsuarioAction() );
   


    const [userdata, saveUserData] = useState({

        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })
    const {nombre, email, password} = userdata;
    const handleChange = e =>{

        saveUserData({
            ...userdata,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e =>{

        e.preventDefault();

        creausuarios({
            nombre, email, password
        })
        mostrarAdministraUsuarios();

    }
    return ( 

        <form
                onSubmit={handleSubmit}
         >
             <h3 className="text-center mb-4 font-weight-bold">Crear Usuarios</h3>
        <div className="row">
            <div className="col-md-2 form-group">
                 <label className="form-group">Nombre</label>
            </div>
            <div className="col-md-10 form-group">
                        <input
                            type='text'
                            className="form-control"
                            name="nombre"
                            onChange={handleChange}
                        />
            </div> 
            <div className="col-md-2 form-group">
                 <label className="form-group">Email</label>
            </div>
            <div className="col-md-10 form-group">
                        <input
                            type='text'
                            className="form-control"
                            name="email"
                            onChange={handleChange}
                            
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
                            onChange={handleChange}
                            
                        />
            </div> 
            <div className="col-md-2 form-group">
                 <label className="form-group">Confirmar</label>
            </div>
            <div className="col-md-10 form-group">
                        <input
                            type='password'
                            className="form-control"
                            name="confirmar"
                            onChange={handleChange}                            
                        />
            </div> 
            <div className="col-md-12 form-group">
                    <button className="btn btn-primary btn-block">Crear Usuario</button>    
            </div> 
        </div>
    </form>


     );
}
 
export default CrearUsuarios;