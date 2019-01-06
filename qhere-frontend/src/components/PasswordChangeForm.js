import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {resetPassword} from '../actions/Users'
import {Form,Button,Message} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
 class PasswordChangeForm extends Component{


    constructor(props) {
        super(props);
        this.state = {
            code:"",
            newPassword:"",
            confirmNewPassword:"",
            redirect:false
        };
    }
    componentDidUpdate(){
        
        if(this.props.state.users.isResetPassword===true){
            this.setState({
                redirect:true
            })
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit=()=>{
        if(this.state.newPassword !== this.state.confirmNewPassword){
            console.log("Şifreleriniz aynı değil")
        }else{

            this.props.resetPassword(this.state)
        }
    }

    render(){ 
        const message=(
            <div style={style.Message}>
            <Message negative>
                <Message.Header>Uyarı</Message.Header>
                <p>Şifreleriniz Eşit Değil</p>
            </Message>
            </div>
        )

        
        return(
            <div>
                <Form style={style.Form}>
                    <label style={style.Label}>Kod</label>
                    <Form.Input
                            fluid
                            name='code'
                            placeholder='Kod'
                            value={this.state.code}
                            onChange={this.handleChange}
                        />
                    <label style={style.Label}>Yeni Şifre</label>
                    <Form.Input
                            fluid
                            name='newPassword'
                            icon='lock'
                            iconPosition='left'
                            placeholder='Yeni Şifre'
                            type='password'
                            value={this.state.newPassword}
                            onChange={this.handleChange}
                        />
                    <label style={style.Label}>Yeni Şifreyi Onayla</label>
                    <Form.Input
                            fluid
                            name='confirmNewPassword'
                            icon='lock'
                            iconPosition='left'
                            placeholder='Yeni Şifreyi Onayla'
                            type='password'
                            value={this.state.confirmNewPassword}
                            onChange={this.handleChange}
                        />
                    <Button type='submit' onClick={this.onSubmit}>Şifre Güncelle</Button>
                </Form>
                {this.state.newPassword === this.state.confirmNewPassword ? "" : message}
                {this.state.redirect === true ? <Redirect to="/"/> : ""}
            </div>
        )
    }

 }

 const style={
     Form:{
         margin:'auto',
         marginTop:50,
         width:450
     },
     Label:{
         float:'Left',
         marginLeft:15,
         font:25
     }
 }

 const mapStateToProps=(state)=>{
    return{
        resetPassword:state.resetPassword,
        state:state
    }
 }

 const mapDispatchToProps={
    resetPassword
 }

 export default connect(mapStateToProps,mapDispatchToProps) (PasswordChangeForm);