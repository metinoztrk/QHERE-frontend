import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import { Button, Form ,Radio,Message} from 'semantic-ui-react';
class RegisterForm extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            schoolNumber:"",
            fullName:"",
            email:"",
            password:"",
            gender:"",
            userType:"",
            error:{
                statusCode:"",
                statusText:""
            },
            redirect:false
            };
    }
    
    handleRadioChange = (e, { value }) => {
        this.setState({ 
            gender:value 
        })
    }

    handleUserTypeChange = (e, { value }) => {
        if(value==="Manager")
            this.setState({  
                userType:value,
                schoolNumber:""
            })
        else
            this.setState({  
                userType:value
            })   
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.error.statusCode === 200){
            this.setState({
                redirect:true,
            })
        }
    }

    componentWillUpdate(nextProps) {
        if(nextProps.error.statusCode !== this.state.error.statusCode)
        {
            this.setState({
                error:{
                    statusCode:nextProps.error.statusCode,
                    statusText:nextProps.error.statusText
                }
            })
        }
    }

    onSubmit=()=>(
        this.props.register(this.state)
    )
        
    
    render(){
        const message=(
            <div style={style.Message}>
            <Message negative>
                <Message.Header>{this.state.error.statusCode}</Message.Header>
                <p>{this.state.error.statusText}</p>
            </Message>
            </div>
        )

        const RegisterForm=(
            <div>
                <Form style={style.RegisterForm}>
                <h1 style={{marginBottom:50}}>Kayıt</h1>
                    {
                        this.state.userType!=="Manager" ? 
                        <Form.Field>
                        <label>Okul Numarası</label>
                        <input 
                        name='schoolNumber'
                        value={this.state.schoolNumber}
                        onChange={this.handleChange}
                        placeholder='Okul Numarası' />
                        </Form.Field> : " "
                    }
                    <Form.Field>
                    <label>Adı Soyadı</label>
                    <input 
                    name='fullName'
                    value={this.state.fullName}
                    onChange={this.handleChange}
                    placeholder='Adı Soyadı' />
                    </Form.Field>
                    <Form.Field>
                    <label>E mail</label>
                    <input 
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder='E mail' />
                    </Form.Field>
                    <Form.Field>
                    <label>Şifre</label>
                    <input 
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder='Şifre' />
                    </Form.Field>
                    <div>
                    <Form.Field>
                    <label>Kullanıcı Tipi</label>
                    <Radio style={style.RegisterRadio}
                        label='Manager'
                        name='Manager'
                        value='Manager'
                        checked={this.state.userType === 'Manager'}
                        onChange={this.handleUserTypeChange}
                    />
                    <Radio
                        label='Student'
                        name='Student'
                        value='Student'
                        checked={this.state.userType === 'Student'}
                        onChange={this.handleUserTypeChange}
                    />
                    <label>Cinsiyet</label>
                    <Radio style={style.RegisterRadio}
                        label='Erkek'
                        name='Erkek'
                        value='Erkek'
                        checked={this.state.gender === 'Erkek'}
                        onChange={this.handleRadioChange}
                    />
                    <Radio
                        label='Kadın'
                        name='Kadın'
                        value='Kadın'
                        checked={this.state.gender === 'Kadın'}
                        onChange={this.handleRadioChange}
                    />
                    </Form.Field>
                    </div>
                    <Button type='submit' style={style.RegisterButton} onClick={this.onSubmit}>Kayıt</Button>
                    { this.state.error.statusCode === ""  ?  "" : message  }
                </Form>
            </div>
        )

        return(
            <div>
                { this.state.redirect ? <Redirect to='/'/> : RegisterForm }
            </div>
        )
    }
}

const style={
    RegisterForm:{
        margin:'auto',
        marginTop:50,
        width: 500,
        borderStyle: 'groove',
        borderRadius: 25,
        padding:20
    },
    RegisterRadio:{
        marginRight:30,
        marginBottom:20
    },
    RegisterButton:{
        width:150
    },
    Message:{
        marginTop:20
    }
}

export default RegisterForm;