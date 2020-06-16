import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {eliminarUsuarioAction, obtieneUsuarioEliminarAction, mostrarUsuarioAction} from '../../actions/userAction';
const ListadoUsuarios = ({usuario, count}) => {

   const dispatch = useDispatch();
    const {_id, nombre, creado, email} = usuario;
    const eliminaruaurio = (id) => dispatch( eliminarUsuarioAction(id) );
    // const obteniendoUsuarioEliminar = (usuario) => dispatch( obtieneUsuarioEliminarAction(usuario) );
    // const mostrarAdministraUsuarios = () => dispatch( mostrarUsuarioAction() );

    

    const eliminarUsuario = (id)=>{

        eliminaruaurio(id);
        // obteniendoUsuarioEliminar(id);
        
    }


    return ( 

        <tr>
            <th scope="row">{count}</th>
            <td>{nombre}</td>
            <td>{email}</td>
            <td>{creado}</td>
            <td>
                <button className="btn btn-sm btn-success">Editar</button>                
            </td>
            <td>
                <button 
                onClick={e=>eliminarUsuario(_id)}
                className="btn btn-sm btn-danger">Eliminar</button>
            </td>
        </tr>

     );
}
 
export default ListadoUsuarios;