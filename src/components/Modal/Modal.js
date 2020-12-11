import React from 'react'; 
import './Modal.css';


const modal = props =>(
    
    <div className="modal">
        <header className="modal_header">
            <h1>{props.title}</h1>
        </header>
        <section className="modal_content">
            {props.children}
        </section>
        <section className="modal-actions">
        {props.canConfirm && <button className="especial" onClick ={props.onConfirm}>Aceptar</button>}
        </section>
    </div>
);

export default modal;