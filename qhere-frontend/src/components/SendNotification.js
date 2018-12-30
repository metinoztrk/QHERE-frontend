import React, {Component} from 'react';
import {Form,Confirm,Button} from 'semantic-ui-react'
class SendNotification extends Component{

    constructor(props) {
        super(props);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.state = { 
            id:this.props.id,
            className:this.props.className,
            title:"",
            content:"",
            loading:true,
            redirect:false
        };
    }

    show = () => this.setState({ open: true })

    handleConfirm(){
        this.props.sendNotification(this.state)
        this.setState({ open: false,confirm:true})
        this.setState({id:"",title:"",content:"",className:""})
    }
    handleCancel(){
         this.setState({ open: false })
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){

        return(
        <div>
        <Form>
            <h1 className="ui header">Duyuru paylaş</h1>
            <Form.Group widths='equal'>
            <Form.Input 
            fluid label='title' 
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
            placeholder='Title' />
            </Form.Group>
            <Form.Group inline>
            </Form.Group>
            <Form.TextArea 
            label='content' 
            name='content'
            value={this.state.content}
            onChange={this.handleChange}
            placeholder='Content' />
            <Button  onClick={this.show} style={style.button}>Paylaş</Button>
                                        <Confirm
                                        content="Duyuru paylaşmak istiyor musunuz?"
                                        open={this.state.open}
                                        onCancel={this.handleCancel}
                                        onConfirm={this.handleConfirm}
                                        />
        </Form>
        </div>
        )
    }

}

const style={
    button:{
        float:'Right',
        padding:10,
    }
}

export default  SendNotification;