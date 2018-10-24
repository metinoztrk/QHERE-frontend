import React,{Component} from 'react';
import {connect} from 'react-redux';
import LoginForm from '../LoginForm';
import {login} from '../../actions/Users'
class LoginPage extends Component{
    render(){
        return(
            <LoginForm login={this.props.login} users={this.props.users}/>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        login:state.token,
        users:state.users
    }
}

const mapDispatchToProps={
    login
}

export default connect(mapStateToProps,mapDispatchToProps) (LoginPage);