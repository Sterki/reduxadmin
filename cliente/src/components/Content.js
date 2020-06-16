import React, {Fragment, useEffect} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CrearUsuarios from './usuarios/crearUsuarios';
import AdministrarUsuarios from './usuarios/administrarUsuarios';
import {useSelector} from 'react-redux';

const Content = () => {

    const mostrar = useSelector( state => state.userdata.mostrarusuarios);
    const creausuarios = useSelector( state => state.userdata.mostrarcreausuarios);
    
    return ( 
        <Fragment>
            <Header />
            <div className="row">
                <div className="col-md-3">
                <Sidebar />
                </div>                
               <div className="col-md-8 ml-4 p-4">
                   <div className="container">
                       <div className="row">
                           {mostrar ? <AdministrarUsuarios /> : null}  
                           {creausuarios? <CrearUsuarios /> : null}
                       </div>                            
                   </div>
                    
               </div>
            </div>                        
        </Fragment>
     );
}
 
export default Content;