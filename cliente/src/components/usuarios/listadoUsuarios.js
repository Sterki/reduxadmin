import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {eliminarUsuarioAction} from '../../actions/userAction';
const ListadoUsuarios = ({usuario, count}) => {

   const dispatch = useDispatch();
    const {_id, nombre, creado, email} = usuario;
    const eliminaruaurio = (id) => dispatch( eliminarUsuarioAction(id) );

    const eliminarUsuario = (id)=>{

        eliminaruaurio(id);

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