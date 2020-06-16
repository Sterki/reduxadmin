import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {obtieneUsuarioAction, cerrarSesionAction} from '../actions/userAction';
import {useHistory} from 'react-router-dom';

const Header = () => {

    const usuario = useSelector( state => state.userdata.datosusuario);
    
    const dispatch = useDispatch();
    const history = useHistory();
    const obtienesuario = () => dispatch( obtieneUsuarioAction() );
    const cerrarSesion = () => dispatch( cerrarSesionAction() );

    useEffect(()=>{

        obtienesuario();

    },[] )

    const onClickCerrarSesion = () =>{

        cerrarSesion();
        history.push('/');
    }
    return ( 

        <div className="container-fluid mb-5 backgroundheader">
            <div className="row">
                <div className="col-md-12 alinear">
                        <span className="font-weight-bold text-white">Bienvenido : {usuario ? usuario.usuario.nombre : null}</span>
                        <button 
                        onClick={e=>onClickCerrarSesion()}
                        className="btn btn-light ml-2">Cerrar Sesion</button>
                </div>                                                    
            </div>
        </div>
     );
}
 
export default Header;