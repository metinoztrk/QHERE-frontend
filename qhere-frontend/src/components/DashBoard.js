import React,{Component } from 'react'
import {List,Button,Divider} from 'semantic-ui-react'
class DashBoard extends Component{

    state={
        requestStudents:[]
    }

    componentWillMount(){
        this.props.getClassesRequest()
    }

    render(){
        console.log(this.props.requestStudents)
        return(
            <div  style={style.div}>
            <h1>Dashboard</h1>
            {
                this.props.requestStudents.map((student)=>
                <List key={student.classId} relaxed style={style.list}>
                        <List.Item >
                        <List.Content floated='left'>
                            <List.Header as='a' style={style.header}>{student.studentName+" "+student.className} dersine katılma isteğinde bulundu.</List.Header>
                        </List.Content>
                        <List.Content floated='right'>
                            <Button style={style.button}>Kabul</Button>
                            <Button color='red' style={{padding:12}}>Reddet</Button>
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

export default DashBoard;