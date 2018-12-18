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
import ClassQhere from './components/ClassQhere'
import QhereInfo from './components/QhereInfo'
import UpdateClass from './components/UpdateClass'
import HomePageStundent from './components/pages/HomePageStudent'
import ClassesStudent from './components/ClassesStudent'
import ClassInfoStudent from './components/ClassInfoStudent'

class App extends Component {
  
  
  render() {
    console.log(process.env.REACT_APP_SECRET_CODE)
    const LoginOff=(
      <div>
          <Route path='/' component={IndexPage}></Route>
          <Route exact path='/register' component={RegisterPage}></Route>
          <Route exact path='/login' component={LoginPage}></Route>
          <Route exact path='/passwordReset' component={PasswordReset}></Route>
          <Route exact path='/PasswordChangeForm' component={PasswordChangeForm}></Route>
      </div>
    )
  
    const LoginOn=(
      
      <div>
        {
          localStorage.userType==="Manager" ?  
          <div>
          <Route path='/homePage' component={HomePage}></Route>
          <Route exact path='/homePage/createClass' component={CreateClassForm}></Route>
          <Route exact path='/homePage/updateClass/:id' component={UpdateClass}></Route>
          <Route exact path='/homePage/classes' component={Classes}></Route>
          <Route exact path='/homePage/classes/:_id/info' component={ClassInfo}></Route>
          <Route exact path='/homePage/classes/:_id/Qhere' component={ClassQhere}></Route>
          <Route exact path='/homePage/classes/:id/qrInfo/:id' component={QhereInfo}></Route> 
          </div>
          :
          <div>
          <Route path='/homePage' component={HomePageStundent}></Route>
          <Route exact path='/homePage/classes' component={ClassesStudent}></Route>
          <Route exact path='/homePage/classes/:id' component={ClassInfoStudent}></Route>
          </div>
      } 
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
