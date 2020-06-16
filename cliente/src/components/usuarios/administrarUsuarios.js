import React, {useEffect, useState} from 'react';
import ListadoUsuarios from '../usuarios/listadoUsuarios';
import {useSelector, useDispatch} from 'react-redux';
import { obtieneUsuarioAction } from '../../actions/userAction';

const AdministrarUsuarios = () => {

  const [contador, guardarContador] = useState({

    count: 0

  });
  let {count} = contador;
  const dispatch = useDispatch();
  const usuarios = useSelector( state => state.userdata.listadousuarios);
  console.log(usuarios);

  const obtieneUsuarios = () => dispatch( obtieneUsuarioAction() );
 

  useEffect(()=>{

    obtieneUsuarios();

  }, [usuarios])

    return (

      <table className="table table-striped">
          <thead>
              <tr>
                <th scope="col">Contador de usuarios</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Created</th>
                <th scope="col" colSpan="2">Actiones</th>
              </tr>
          </thead>
          <tbody>
                {usuarios.map(usuario =>(
                    count = count +1,
                    <ListadoUsuarios 
                        key={usuario._id}
                        usuario={usuario}
                        count={count}
                    />
                  
                ))}
          </tbody>
      </table>
       
      );
}
 
export default AdministrarUsuarios;