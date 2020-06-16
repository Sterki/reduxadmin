import {BEGIN_GET_USERDATA, 
    GET_USERDATA_OK, 
    GET_USERDATA_ERROR,
    COMIENZA_LOGIN,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    MOSTRAR_ERROR, 
    OCULTAR_ERROR,
    MOSTRAR_USUARIO,
    MOSTRAR_CREA_USUARIO,
    OBTIENE_ALL_USERS,
    CREA_USUARIOS_EXITO,
    CERRAR_SESION,
    ELIMINAR_USUARIO
} from '../types/index';

const inisialState = {

    error: null,
    datosusuario: null,
    loading: false,
    mensaje: null,
    token: null,
    mostrarusuarios: false,
    mostrarcreausuarios: true,
    listadousuarios: [],
    autenticado: null
}

export default (state = inisialState, action) =>{

    switch(action.type){
        case MOSTRAR_ERROR:
            return{
                ...state,
                mensaje: action.payload,
                autenticado: null
            }
        case OCULTAR_ERROR:
            return{
                ...state,
                mensaje: null
            }
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                token: action.payload.token,
                autenticado: true

            }
        case GET_USERDATA_OK:
            return{
                ...state,
                datosusuario: action.payload
            }
        case MOSTRAR_USUARIO:
            return{
                ...state,
                mostrarusuarios: true,
                mostrarcreausuarios: false
            }
        case MOSTRAR_CREA_USUARIO:
            return{
                ...state,
                mostrarcreausuarios: true,
                mostrarusuarios: false
            }
        case OBTIENE_ALL_USERS:
            return{
                ...state,
                listadousuarios: action.payload
            }
        case LOGIN_ERROR: 
            return{
                ...state,
                mensaje: action.payload,
                autenticado: null
            }
        case CERRAR_SESION: 
        localStorage.removeItem('token');
        return{
            ...state,
            autenticado: null,
            datosusuario: null,
            token: null
        }
        case ELIMINAR_USUARIO:           
            return{
                ...state,
                listadousuarios: state.listadousuarios.filter(usuario => usuario._id !== action.payload)
            }
        default: return state;
    }
}