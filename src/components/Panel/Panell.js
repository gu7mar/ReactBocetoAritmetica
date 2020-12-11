import React from 'react';

import './Panel.css'
import AuthContext from '../../context/auth-context';

const mainNavigation=props=>(
<AuthContext.Consumer>
    {(context)=>{
        return(
            <header className="mainn">
            <div image='https://cursos.bo/contenido/imagenes/paginas/15741796100000.jpg'>
                <h4>Mas de 100 cursos de en linea con el objeto de brindar </h4>
                <h4>Cetificacion digital con validez en el estado plurinacional boliviano</h4>

            </div>
            </header>
        )
    }}

</AuthContext.Consumer>
);

export default mainNavigation