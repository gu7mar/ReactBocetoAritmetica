import React, {Component} from 'react';
import axios from 'axios'
import Modal from '../components/Modal/Modal'
import './Signup.css';
import Backdrop from '../components/Backdrop/Backdrop'
import AuthContext from '../context/auth-context';

class SignupPage extends Component{
    static contextType = AuthContext;
    state = {
        creating: false,
        micambio: false
    }
    startCreateEventHandler =() =>{
        this.setState({creating: true});
    }

    modalConfirmHandler = () =>{
        this.context.logout();
        //this.setState({creating: false});
        //this.setState({micambio: true});
        //console.log("entra aqui!!")
        
        //AuthContext.micambio; true;
        this.context.cambio('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJod…FhIn0.hWYjItoFcbMTFXgE8BwkGGiH8j4VTrmb-2y2pHDsSZ8');

        //console.log(this.context.cambio);
    }
    constructor(props){
        super(props)
        this.state = {
            name: '',
            last_name: '',
            second_last_name: '',
            identity_number: '',
            email: '',
            password: ''
        }
    }
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault();
        //console.log(this.state)
        //axios.post('http://localhost/laravel/primaria/public/api/user', this.state)
        axios.post('http://service.heartappproject.org/api/user', this.state)
            .then(response =>{
                //console.log(response.status);
                if (response.data.message){
                    this.startCreateEventHandler();
                    //this.context.login('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJod…FhIn0.hWYjItoFcbMTFXgE8BwkGGiH8j4VTrmb-2y2pHDsSZ8');
                    //console.log("exitoso!!!!");
                }
            })
            .catch(error =>{
                //console.log("ajjjj!!!!");
                
                console.log(error)
            })
    }
    render(){
        const {name, last_name, second_last_name, identity_number, email, password} = this.state
        return(
            <React.Fragment>
                {this.state.creating && <Backdrop />}
                {this.state.creating && (
                <Modal title="registro exitoso" canConfirm onConfirm={this.modalConfirmHandler}>
                    <p>su usuario fue creado exitosamente, ya puedes loguearte</p>
                </Modal>
                )}
            <form className="signin-form" onSubmit={this.submitHandler}>
            <div className="form-control">
                <label htmlFor="name">Nombre</label>
                <input type="name" name="name" value={name} onChange={this.changeHandler}/>
            </div>
            <div className="form-control">
                <label htmlFor="name">Apellido Paterno</label>
                <input type="name" name="last_name" value={last_name} onChange={this.changeHandler}/>
            </div>
            <div className="form-control">
                <label htmlFor="name">Apellido Materno</label>
                <input type="name" name="second_last_name" value={second_last_name} onChange={this.changeHandler}/>
            </div>
            <div className="form-control">
                <label htmlFor="name">CI</label>
                <input type="name" name="identity_number" value={identity_number} onChange={this.changeHandler}/>
            </div>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={this.changeHandler}/>
            </div>
            <div className="form-control">
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" value={password} onChange={this.changeHandler}/>
            </div>
            <div className="event-control">
                <button className="btn" type="submit" >Registrar</button>
            </div>
            </form>
            </React.Fragment>
        );
    }
}

export default SignupPage;