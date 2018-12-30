import React,{Component} from 'react'
import {List,Button,Divider,Confirm} from 'semantic-ui-react'

class DashBoardItem extends Component{

    constructor(props) {
        super(props);
        this.handleConfirmApprove = this.handleConfirmApprove.bind(this);
        this.handleConfirmReject = this.handleConfirmReject.bind(this);
        this.state = { 
            id:"",
            className:"",
            class:"",
            title:"",
            content:"",
            loading:true,
            openReject: false,
            openApprove:false,
            confirm:false
        };
    }
    

    showApprove = () => this.setState({ openApprove: true })

    showReject = () => this.setState({ openReject: true })

    handleConfirmApprove(student){
        this.props.actions.getClassesRequest()
        this.props.actions.approveStudent(student);
        this.setState({ openApprove: false,confirm:true})
    }

    handleConfirmReject(student){
        this.props.actions.getClassesRequest()
        this.props.actions.rejectStudent(student);
        this.setState({ openReject: false,confirm:true})
    }

    handleCancel(){
        this.setState({ openReject: false,openApprove:false })
   }
    

    render(){
        return(
            <div>
                {
                    this.props.actions.requestStudents.map((student)=>
                    <List key={student.classId} relaxed style={style.list}>
                        <List.Item >
                        <List.Content floated='left'>
                            <List.Header as='a' style={style.header}>{student.studentName+" "+student.className} dersine katılma isteğinde bulundu.</List.Header>
                        </List.Content>
                        <List.Content floated='right'>
                            <Button style={style.button} onClick={this.showApprove}>Kabul</Button>
                                        <Confirm
                                        content="Kabul etmek istiyor musunuz"
                                        open={this.state.openApprove}
                                        onCancel={()=>this.handleCancel()}
                                        onConfirm={()=>this.handleConfirmApprove(student._id)}
                                        />
                            <Button color='red' onClick={this.showReject}>Reddet</Button>
                                        <Confirm
                                        content="Reddetmek istiyor musunuz?"
                                        open={this.state.openReject}
                                        onCancel={()=>this.handleCancel()}
                                        onConfirm={()=>this.handleConfirmReject(student._id)}
                                        />
                        </List.Content>
                        </List.Item>
                        <Divider />
                    </List>
                    )
                }
                
            </div>
        )
    }

}


const style={
    list:{
        margin:'auto',
        marginTop:10,
        width:700,
        padding:20
    },
    header:{
        marginTop:10,
        fontSize: 16
    },
    button:{
        backgroundColor:'#0fd0c7',
        padding:12
    },
    div:{
        margin:'auto',
        marginTop:50,
        marginLeft:200,
        marginRight:200,
        borderStyle: 'groove',
        borderRadius: 25,
        padding:20
    }
    
}

export default DashBoardItem;