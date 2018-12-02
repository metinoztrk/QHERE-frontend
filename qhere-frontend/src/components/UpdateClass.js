import React,{Component} from 'react'
import { Button, Form } from 'semantic-ui-react';
import {connect} from 'react-redux'
import {editClass} from '../actions/Manager' 
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {Redirect} from 'react-router-dom';
   

class UpdateClass extends Component{

    constructor(props) {
        super(props);
        this.handleDayChange = this.handleDayChange.bind(this);
    }

    state={
        classId:"",
        className:"",
        lastJoinTime:"",
        quota:"",
        discontinuity:"",
        description:"",
        redirect:false
    }

    componentWillMount(){
        var id = window.location.pathname.slice(22, 46);
        this.props.classes.find(instance=>{
            if(instance._id===id){
                this.setState({
                    classId:instance._id,
                    className:instance.className,
                    lastJoinTime:instance.lastJoinTime,
                    quota:instance.quota,
                    discontinuity:instance.discontinuity,
                    description:instance.description,
                })
            }
            return null;
        })
    }



    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleDayChange(day) {
        this.setState({  lastJoinTime: day });
    }

    onSubmit=()=>{
        this.props.editClass(this.state)
        this.setState({
            redirect:true
        })
    }

    render(){
        console.log(this.props.state.manager.Error)
        const form=(
            <div>
                <Form style={style.UpdateClassForm}>
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
                    <Form.Field>
                    <label>Last Join Time</label>
                    <DayPickerInput 
                    value={this.state.lastJoinTime}
                    onDayChange={this.handleDayChange} />
                    </Form.Field>
                    <Button type='submit' onClick={this.onSubmit}>Kayıt</Button>
                </Form>
            </div>
        )

        return(
            <div>
                {this.props.state.manager.Error.statusCode === 200 && this.state.redirect ? <Redirect to="/homePage/classes"/> : form }
            </div>
        )
    }

}

const style={
    UpdateClassForm:{
        margin:'auto',
        marginTop:50,
        width: 500
    }
}

const mapStateToProps=(state)=>{
    return{
        classes:state.manager.classes,
        state:state
    }
}

const mapDispatchToProps={
    editClass
}

export default connect(mapStateToProps,mapDispatchToProps) (UpdateClass)