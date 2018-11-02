import React, { Component } from 'react';
import './App.css';
import {Route,Redirect} from 'react-router-dom'
import PasswordChangeForm from './components/PasswordChangeForm'
import PasswordReset from './components/pages/PasswordReset'
import RegisterPage from './components/pages/RegisterPage'
import LoginPage from './components/pages/LoginPage'
import IndexPage from './components/pages/IndexPage'
import HomePage from './components/pages/HomePage'
import CreateClassForm from './components/CreateClassForm'
import Classes from './components/Classes'
import ClassInfo from './components/ClassInfo'

class App extends Component {


  render() {

    const LoginOff=(
      <div>
          <Route path='/' component={IndexPage}></Route>
          <Route exact path='/register' component={RegisterPage}></Route>
          <Route exact path='/login' component={LoginPage}></Route>
      </div>
    )
  
    const LoginOn=(
      <div>
          <Route path='/homePage' component={HomePage}></Route>
          <Route exact path='/homePage/createClass' component={CreateClassForm}></Route>
          <Route exact path='/homePage/classes' component={Classes}></Route>
          <Route exact path='/passwordReset' component={PasswordReset}></Route>
          <Route exact path='/PasswordChangeForm/:_id' component={PasswordChangeForm}></Route>
          <Route exact path='/homePage/classes/:_id/info' component={ClassInfo}></Route>
      </div>
    )
  
    
    return (
      <div className="App">
        { localStorage.token === undefined ? LoginOff : LoginOn }
        { localStorage.token !== undefined && (window.location.pathname==="/" || window.location.pathname==="/login" || window.location.pathname==="/register") ? <Redirect to="/homePage"/> : ""}    
      </div>
    );
  }
}


export default App;
