import React,{Component} from 'react';
import {connect} from 'react-redux';
import RegisterForm from '../RegisterForm'; 
import  {register} from '../../actions/Users'

class RegisterPage extends Component{
    render(){
        return(
            <RegisterForm register={this.props.register} error={this.props.error}/>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        register:state.register,
        error:state.users.Error
    }
}

const mapDispatchToProps={
    register
}

export default connect(mapStateToProps,mapDispatchToProps) (RegisterPage);