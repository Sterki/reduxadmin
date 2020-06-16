import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {mostrarUsuarioAction, mostrarCreaUsuariosAction, obtenerallUsers} from '../actions/userAction';

const Sidebar = () => {


   
    const dispatch = useDispatch();
    const mostrarusuarios = useSelector(state => state.userdata.mostrarusuarios);
    const mostrarcreausuarios = useSelector( state => state.userdata.mostrarcreausuarios);
   

    const mostrarAdministraUsuarios = () => dispatch( mostrarUsuarioAction() );
    const obtieneUsuarios = () => dispatch( obtenerallUsers() );
    const mostrarCreaUsuario = () => dispatch( mostrarCreaUsuariosAction() );
    
const handleClick = usuario =>{
   
    if(!usuario){
       
        usuario = true;
        mostrarAdministraUsuarios();
        obtieneUsuarios();
       
    }
}
const handleClickCrea = crea =>{
    
    if(!crea){
            
        crea = true;
        mostrarCreaUsuario();
             
    }

}
    return ( 
        
            <ul className="nav flex-column ">
                <li className="nav-item">
                    <button 
                        type="button"   
                        onClick={e=>handleClickCrea(mostrarcreausuarios)}                 
                        className={`${mostrarcreausuarios ?"btn btn-block formato text-left active" : "btn btn-block formato text-left" }`}>Crear Usuarios</button> 
                </li>
                <li className="nav-item">
                    <button 
                            type="button"   
                                          
                            className="btn btn-block text-left formato">Actividades</button> 
                </li>
                <li className="nav-item">
                    <button 
                            type="button"   
                                           
                            className="btn btn-block text-left formato">Peticiones</button> 
                </li>
                <li className="nav-item">
                    <button 
                    type="button"   
                    onClick={e=>handleClick(mostrarusuarios)}                 
                    className={`${mostrarusuarios ? "btn btn-block formato text-left active" : "btn btn-block formato text-left"}`}>Administrar Usuarios</button> 
                </li>
            </ul>
      


     );
}
 
export default Sidebar;