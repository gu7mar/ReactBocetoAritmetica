import React from 'react';
import {NavLink} from 'react-router-dom';

import './MainNavigation.css'
import AuthContext from '../../context/auth-context';

const mainNavigation=props=>(
<AuthContext.Consumer>
    {(context)=>{
        return(
            <header className="main-navigation">
            <div className="main-navigation_logo">
                <h1>Arithmetic</h1>
            </div>
            <div className="spacer" />

            <nav className="main-navigation_item">
            <ul>
            {/*!context.token && (<li><NavLink to="/registro">Registro</NavLink></li>)*/}
            {!context.token && (<li><NavLink to="/login">Login</NavLink></li>)}

            {/*!context.token && (<li><NavLink to="/multiplicacion">Multiplicacion</NavLink></li>)*/}

            {context.token && (
                <React.Fragment>
                {/*<li><NavLink to="/cursos">Cursos</NavLink></li>*/}
                <li><NavLink to="/multiplicacion">Multiplicacion</NavLink></li>
                <li><NavLink to="/division">Dividir</NavLink></li>
                <li><button onClick={context.logout}>Salir</button></li>
                </React.Fragment>
            )}
            </ul>
             </nav>
            </header>
        )
    }}

</AuthContext.Consumer>
);

export default mainNavigation