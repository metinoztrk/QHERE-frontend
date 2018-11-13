import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {createClass,reset} from '../actions/Manager'
import {Redirect} from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react';
class CreateClassForm extends Component{

    state={
        _id:"",
        managerName:"",
        className:"",
        lastJoinTime:"",
        quota:"",
        discontinuity:"",
        description:"",
        redirect:false,
        status:""
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    componentWillMount(){
        var id = window.location.pathname.slice(22, 46);
        this.props.state.manager.classes.find(instance=>{
            if(instance._id===id){
                this.setState({
                    _id:instance._id,
                    managerName:instance.managerName,
                    className:instance.className,
                    lastJoinTime:instance.lastJoinTime,
                    quota:instance.quota,
                    discontinuity:instance.discontinuity,
                    description:instance.description,
                })
            }
        })
    }

    componentWillUnmount( ){
        this.props.reset()
    }

    componentWillUpdate(nextProps) {
        console.log(nextProps.state.manager.createClass)
        if(nextProps.state.manager.createClass===200){
            this.setState({
                redirect:true
            })
        }
    }

    onSubmit=()=>{
        this.props.createClass(this.state)
    }

    render(){
        console.log(this.state)
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
                    <label>Last Join Time</label>
                    <input
                    name='lastJoinTime'
                    value={this.state.lastJoinTime}
                    onChange={this.handleChange}
                    placeholder='Last Join Time' />
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
                    <Button type='submit' onClick={this.onSubmit}>Kayıt</Button>
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