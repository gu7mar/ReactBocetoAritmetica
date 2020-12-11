import React, { Component } from 'react';
import FrontPage from './pages/Front'
import Content from './pages/Content'

import SignupPage from './pages/Signup'
import SigninPage from './pages/Signin'
import CoursesPage from './pages/Courses'
import MultiplicationPage from './pages/Multiplication'
import DividePage from './pages/Divide'
import AuthContext from './context/auth-context';

import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import MainNavigation from './components/Navigation/MainNavigation';
import './App.css';
class App extends Component {
  state = {
    token: null,
    micambio: null,
  }
  componentDidMount(){
    console.log(this.state.token)
    //et toke = localStorage.getItem('toke')
    this.setState({token: localStorage.getItem('toke')});

  }

  login = (token) => {
    this.setState({token: token});
    localStorage.setItem('toke', token)
  };

  logout = () => {
    //ir al endpoint de eliminar token a nivel del servidor
    this.setState({token: null});
    localStorage.removeItem('toke')
    
  };
  cambio = (micambio) => {
    this.setState({micambio: micambio});
  };
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <AuthContext.Provider value={{token: this.state.token, login: this.login, logout: this.logout, micambio: this.state.micambio, cambio: this.cambio}}>
        <MainNavigation />
        {/*<Panell />*/}
        <main className="main-content">
          <Switch>
            {!this.state.token && (<Redirect from="/" to="/presentacion" exact/>)}
            {this.state.token && (<Redirect from="/" to="/cursos" exact/>)}
            {this.state.micambio && (<Redirect from="/registro" to="/login" exact/>)}
            {this.state.token && (<Redirect from="/login" to="/division" exact/>)}

            {this.state.token && (<Redirect from="/login" to="/multiplicacion" exact/>)}
            
            <Route path="/presentacion" component={FrontPage} />
            <Route exact path="/contenido" component={Content} />

            <Route path="/registro" component={SignupPage} />
            {!this.state.token && (<Route path="/login" component={SigninPage} />)}
            {this.state.token && (<Route path="/cursos" component={CoursesPage} />)}
            {this.state.token && (<Route path="/multiplicacion" component={MultiplicationPage} />)}
            {this.state.token && (<Route path="/division" component={DividePage} />)}


            {/*this.state.token && (<Redirect to="/multiplicacion" exact/>)*/}

            {!this.state.micambio && (<Route path="/login" component={SigninPage} />)}
            {this.state.micambio && (<Route path="/cursos" component={CoursesPage} />)}
            {!this.state.micambio && (<Redirect to="/login" exact/>)}

          </Switch>
        </main>
        </AuthContext.Provider>
      </React.Fragment>
      </BrowserRouter>
      
    );
}
}

export default App;
