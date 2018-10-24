import React,{Component} from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { Button, Form, Message } from 'semantic-ui-react'
import {forgot} from '../../actions/Users'
class PasswordReset extends Component{

    state={
        email:"",
        error:{
            status:"",
            statusText:""
        },
        redirect:false   
    }

    componentWillUpdate(nextProps) {
        if(nextProps.state.users.Error.statusCode !== this.state.error.status)
        {  
            this.setState({
                error:{
                    status:nextProps.state.users.Error.statusCode,
                    statusText:nextProps.state.users.Error.statusText
                }
            })
            console.log(nextProps.state.users.Error.statusCode)
            if(nextProps.state.users.Error.statusCode === 200){
                this.setState({
                    redirect:true
                })
            }
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit=()=>(
        this.props.forgot(this.state)
    )

    render(){
        console.log(this.state)
    const message=(
            <div style={style.Message}>
            <Message negative>
                <Message.Header>{this.state.error.status}</Message.Header>
                <p>{this.state.error.statusText}</p>
            </Message>
            </div>
    )

    const form=(
        <div >
                <Form style={style.PasswordResetForm}>
                <h1>Forgot Password</h1>
                        <Form.Input 
                        label='Email'
                        name='email'
                        value={this.state.email} 
                        onChange={this.handleChange}
                        placeholder='Enter your email address' 
                        style={style.PasswordResetInput}/>
                        <Message success header='Form Completed' content="You're all signed up for the newsletter" />
                        <Button onClick={this.onSubmit}>Send password reset Email</Button>
                        { this.state.error.status !== 400  ?  "" : message }
                </Form>
            </div>
    )

        return(
            <div>
                { this.state.redirect === true ?   <Redirect to='/login'/> : form  }
            </div>
        )
    }
}

const style={
    PasswordResetForm:{
        margin:'auto',
        width: 500,
        marginTop:100,
        borderStyle: 'groove',
        borderRadius: 25,
        padding:20
    },
    PasswordResetInput:{
        width:300
    },
    Message:{
        marginTop:20
    }
}

const mapStateToProp=(state)=>{
    return{
        forgot:state.forgot,
        state:state
    }
}

const mapDispatchToProps={
    forgot
}

export default connect(mapStateToProp,mapDispatchToProps) (PasswordReset);