import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {createClass,reset} from '../actions/Manager'
import {Redirect} from 'react-router-dom'
import { Button, Form,Confirm } from 'semantic-ui-react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class CreateClassForm extends Component{

    constructor(props) {
        super(props);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.state = {
            open: false,
            lastJoinTime: undefined,
            className:"",
            quota:"",
            discontinuity:"",
            description:"",
            redirect:false,
            status:""
        };
      }
    
    show = () => this.setState({ open: true })

    handleConfirm(){
        this.setState({ 
            open: false,
            redirect:true
        })
        this.props.createClass(this.state)
        
    }

    handleCancel(){
         this.setState({ open: false })
    }
    

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleDayChange(day) {
        this.setState({  lastJoinTime: day });
    }

    componentWillUnmount( ){
        this.props.reset()
    }

    componentWillUpdate(nextProps) {

        if(nextProps.state.manager.createClass===200){
            this.setState({
                redirect:true
            })
        }
    }

    render(){

        return(
            <div>
                <Form style={style.CreateClassForm}>
                    
                    <Form.Field>
                    <label>Class Name</label>
                    <input
                    name='className'
                    value={this.state.className}
                    onChange={this.handleChange}
                    placeholder='Class Name' />
                    </Form.Field>
                    <Form.Field>
                    <label>Quota</label>
                    <input
                    name='quota'
                    value={this.state.quota}
                    onChange={this.handleChange}
                    placeholder='Quota' />
                    </Form.Field>
                    <Form.Field>
                    <label>Discontinuity</label>
                    <input
                    name='discontinuity'
                    value={this.state.discontinuity}
                    onChange={this.handleChange}
                    placeholder='Discontinuity' />
                    </Form.Field>
                    <Form.Field>
                    <label>Description</label>
                    <input
                    name='description'
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder='Description' />
                    </Form.Field>
                    <Form.Field >
                    <label>Last Join Time</label>
                    <DayPickerInput style={style.Date} onDayChange={this.handleDayChange} />
                    </Form.Field>
                    <Button type='submit' onClick={this.show} style={style.button}>Oluştur</Button>
                                        <Confirm
                                        content="Sınıf oluşturmak istiyor musunuz?"
                                        open={this.state.open}
                                        onCancel={this.handleCancel}
                                        onConfirm={this.handleConfirm}
                                        />
                </Form>
                {this.state.redirect === true ? <Redirect to="/homePage"/>  : ""}
            </div>
        )
    }

}

const style={
    CreateClassForm:{
        margin:'auto',
        marginTop:50,
        width: 500
    },
    Message:{
        marginTop:20
    },
    Date:{
        width:500
    }
}

const mapStateToProps=(state)=>{
    return{
        state:state
    }
}

const mapDispatchToProps={
    createClass,
    reset
}

export default connect(mapStateToProps,mapDispatchToProps) (CreateClassForm);