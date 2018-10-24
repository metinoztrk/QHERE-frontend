import React,{Component} from 'react';
import { Button, Form, Grid, Header , Segment,Label ,Message } from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {Link} from 'react-router-dom';

class LoginForm extends Component{

    state={
        email:"",
        password:"",
        redirect:false,
        error:{
            statusCode:"",
            statusText:""
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.users.userToken!=="")
        {
            this.setState({
                redirect:true,
            });
        }else{
            this.setState({
                error:{
                    statusCode:nextProps.users.Error.statusCode,
                    statusText:nextProps.users.Error.statusText
                }
            })
        }
    }

    onSubmit=()=>{
        this.props.login(this.state);
    }

    render(){

        const message=(
            <div style={style.Message}>
            <Message negative>
                <Message.Header>{this.state.error.statusCode}</Message.Header>
                <p>{this.state.error.statusText}</p>
            </Message>
            </div>
        )


        const LoginForm=(       
            <div className='login-form' style={style.Div}>
                <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                height: 100%;
                }
                `}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                         Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                        <Form.Input 
                            fluid 
                            name='email'
                            icon='user' 
                            iconPosition='left' 
                            placeholder='E-mail address' 
                            value={this.state.eMail}
                            onChange={this.handleChange} />
                        <Form.Input
                            fluid
                            name='password'
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <div>
                        <Link to="passwordReset" res={this.state}>
                        <Label  color='teal' style={style.ForgotLabel} >
                        Forgot password?
                        </Label>
                        </Link>
                        </div>
                        <div>
                        <Button color='teal' fluid size='large' onClick={this.onSubmit}>
                            Login
                        </Button>
                        </div>
                        { this.state.error.statusCode !== "" ?  message : ""}
                        </Segment>
                    </Form>
                    </Grid.Column>
                </Grid>
            </div>
            )
        return(   
           <div>
                {
                    this.state.redirect ? <Redirect to="/homePage"/> : LoginForm
                }
            </div>     
        )
    }
}

    const style={
        ForgotLabel:{
            float:'right',
            marginBottom:20,
        },
        Message:{
            marginTop:20
        },
        Div:{
            marginTop:50
        }
    }
export default LoginForm;