import React, {Component} from 'react';
import axios from 'axios'
import './Signin.css';
import AuthContext from '../context/auth-context';
import Spinner from '../components/Spinner/Spinner'

class SigninPage extends Component{
    static contextType = AuthContext;
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            isLoading: false
        }
    }
    componentDidMount(){
        console.log(this.state.token)
      }
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault();
        //console.log(this.state)
        //axios.post('http://localhost/laravel/primaria/public/api/user/signin', this.state)
        this.setState({isLoading:true})
        axios.post('http://service.heartappproject.org/api/user/signin', this.state)
            .then(response =>{
                //const Response = response.data;
                //console.log(response.data.token)
                this.setState({isLoading: false})
                if (response.data.token){
                    this.context.login(response.data.token);
                    //console.log(this.context.login);
                    //console.log(response.data)
                }
            })
            .catch(error =>{
                console.log(error)
                this.setState({isLoading: false})
            })
    }
    render(){
        const{email, password} = this.state
        return(
        <div>
            {this.state.isLoading ?
                   (<Spinner />)  : 
                   <div>
                       <form className="signin-form" onSubmit={this.submitHandler}>
                            <div className="form-control">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" value={email} onChange={this.changeHandler}/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" name="password"  value={password} onChange={this.changeHandler}/>
                            </div>
                            <div className="form-actions">
                                <button type="submit">Ingresar</button>
                                <button type="button">Ir a registro</button>
                            </div>
                        </form>
                    </div>}
        </div>
        
        )
    }
}

export default SigninPage;