import {BEGIN_GET_USERDATA, 
        GET_USERDATA_OK, 
        GET_USERDATA_ERROR,
        COMIENZA_LOGIN,
        LOGIN_EXITOSO,
        LOGIN_ERROR,
        OCULTAR_ERROR,
        MOSTRAR_ERROR,
        MOSTRAR_USUARIO,
        MOSTRAR_CREA_USUARIO,
        OBTIENE_ALL_USERS,
        COMIENZA_CREA_USUARIO,
        CERRAR_SESION,
        ELIMINAR_USUARIO,
        OBTIENE_USUARIO_ELIMINAR,
        CREA_USUARIOS_EXITO
} from '../types/index';
import clienteAxios from '../config/axios';
import tokenAuth from '../config/tokenAuth';
import {useDispatch} from 'react-redux';

export function mostrarErrorAction(msg, categoria){
        const alerta = {

                msg,
                categoria                
        }
        return(dispatch)=>{

                dispatch( mostraError(alerta) );               
        }
}
const mostraError = (alerta) => ({

        type: MOSTRAR_ERROR,
        payload: alerta
})

export function ocultarAlertAction(){

        return(dispatch)=>{

                dispatch( ocultarAlerta() ); 
        }
}
const ocultarAlerta = () => ({

        type: OCULTAR_ERROR
})


export function loginUsuarioaction(datos){

        return async(dispatch)=>{
                
                dispatch( comienzaLogin() );
                try {
                        const resultado = await clienteAxios.post('/api/auth', datos);
                        // console.log(resultado);
                        dispatch( loginExitoso(resultado.data) );  
                        dispatch( obtieneUsuarioAction() );    
                } catch (error) {
                        console.log(error.response)
                        dispatch( loginError(error.response.data.msg) );
                }
        }
}
const comienzaLogin = () => ({

        type: COMIENZA_LOGIN
})
const loginExitoso = (token) => ({

        type: LOGIN_EXITOSO,
        payload: token
})
const loginError = (error) => ({

        type: LOGIN_ERROR,
        payload: {

                msg: error,
                categoria: "alert-error"
                
        }
})
export function obtieneUsuarioAction(){
                const token = localStorage.getItem('token');
                if(token){

                        tokenAuth(token);
                }
        return async(dispatch)=>{
                try {
                        const resultado = await clienteAxios.get('/api/auth');
                        dispatch( obtieneUsuario(resultado.data) );
                } catch (error) {
                        console.log(error.response)
                }                
        }
}
const obtieneUsuario = (datos) => ({

        type: GET_USERDATA_OK,
        payload: datos
})

export function mostrarUsuarioAction(){

        return(dispatch)=>{

                dispatch( mostrarUsuario() );

        }
}
const mostrarUsuario = () => ({

        type: MOSTRAR_USUARIO
})
export function mostrarCreaUsuariosAction(){

        return(dispatch)=>{

                dispatch(  mostrarCreaUsuario() );

        }
}
const mostrarCreaUsuario = () => ({

        type: MOSTRAR_CREA_USUARIO
})

export function obtenerallUsers(){

        const token = localStorage.getItem('token');
        if(token){

                tokenAuth(token);
        }

        return async(dispatch)=>{

                try {   
                        const resultado = await clienteAxios.get('/api/users');
                        console.log(resultado.data);
                        dispatch( obtieneAllUsuarios(resultado.data) );
                        
                } catch (error) {
                        console.log(error.response);
                }
        }
}
const obtieneAllUsuarios = (usuarios) => ({

        type: OBTIENE_ALL_USERS,
        payload: usuarios
        
})

export function creaUsuariosAction(datos){

       
        return async(dispatch)=>{
                                dispatch( ComienzaCreaNuevoUsuario(datos) );
                        try {   
                                const resultado = await clienteAxios.post('/api/users', datos);   
                                dispatch( creaUsuarioExito() );
                                                          
                               
                                
                        } catch (error) {
                                console.log(error.response)
                        }
                        
        }
}
const ComienzaCreaNuevoUsuario = (datos) => ({

        type: COMIENZA_CREA_USUARIO,
        payload: datos

})
const creaUsuarioExito = () => ({

        type: CREA_USUARIOS_EXITO
})


export function cerrarSesionAction(){

        return(dispatch)=>{

                dispatch( cerrarSesion() );


        }

}
const cerrarSesion = () => ({

        type: CERRAR_SESION


})

export function eliminarUsuarioAction(usuarioid){

        
        return async(dispatch)=>{

                        dispatch( obtieneEliminarUsuario(usuarioid) );
                        try {
                                await clienteAxios.delete(`/api/users/${usuarioid}`);   
                                dispatch( eliminaUsuario() );
                                

                        }catch(error) {
                                console.log(error.response)
                        }
        }
}
const obtieneEliminarUsuario = (usuarioid) => ({

        type: OBTIENE_USUARIO_ELIMINAR,
        payload: usuarioid
           
})
const eliminaUsuario = () => ({

        type: ELIMINAR_USUARIO

})
