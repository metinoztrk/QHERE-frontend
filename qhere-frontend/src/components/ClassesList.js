import React,{Component} from 'react'
import {List,Button, Divider,Confirm} from 'semantic-ui-react'
import {Link,Redirect } from 'react-router-dom'

class ClassesList extends Component{

    constructor(props) {
        super(props);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.state = {
            open: false,
            confirm:false,
            id:""
        };
      }

    show = () => this.setState({ open: true })

    handleConfirm(id){
        this.setState({ open: false,confirm:true ,id:id})
    }
    handleCancel(){
         this.setState({ open: false })
    }
    
    render(){
        console.log(this.props.loading);
        return(
            <div style={style.div}>
                { 
                    this.props.classes.map((Class)=>
                                <List key={Class._id} divided relaxed style={style.list}>
                                    <List.Item>
                                    <List.Content as={Link} onClick={()=>this.props.getClassInfo(Class._id)} to={`/homePage/classes/${Class._id}/info`} floated='left'>
                                        <List.Header style={style.header}>{Class.className}</List.Header>
                                    </List.Content>
                                    <List.Content floated='right'>
                                        <Button onClick={this.show} style={style.button}>QHERE</Button>
                                        <Confirm
                                        content="Qr kod oluşturmak istiyor musunuz?"
                                        open={this.state.open}
                                        onCancel={this.handleCancel}
                                        onConfirm={()=>
                                                        this.handleConfirm(Class._id) }
                                        />
                                    </List.Content>
                                    </List.Item>
                                    <Divider/>
                                </List>   
                    )     
                }
                {this.state.confirm == true ? <Redirect  to={`/homePage/classes/${this.state.id}/Qhere`}/> :""}
            </div>
        )
    }
}

const style={
    list:{
        margin:'auto',
        marginTop:10,
        width:500
    },
    header:{
        marginTop:10,
        fontSize: 16
    },
    button:{
        backgroundColor:'#0fd0c7',
        padding:12,
    },
    div:{
        margin:'auto',
        marginTop:50,
        marginLeft:300,
        marginRight:300,
        borderStyle: 'groove',
        borderRadius: 25,
        padding:20
    }
    
}

export default ClassesList;