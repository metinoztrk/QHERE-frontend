import React,{Component} from 'react'
import {connect} from 'react-redux'
import QRCode from 'react-qr-code';
import {Redirect} from 'react-router-dom'
import io from 'socket.io-client';
import {List, Divider} from 'semantic-ui-react'
 
const socket = io('http://localhost:3001/');

class ClassQhere extends Component{

    state={
        classid:"",
        finished:false,
        socketStudents:[],
    }

    componentWillMount(){
        var _id = window.location.pathname.slice(18, 42);
            this.setState({
                classid:_id,
            })

        this.props.classes.find(instance=>{
                if(instance._id===_id)
                {
                    if(instance.qheres.length===15){
                        this.setState({
                            finished:true
                        })
                    }
                }
                return null;
        })
    }

    componentWillUnmount(){
        socket.emit('deleteClass',{ classId:this.state.classid});
    }

    shouldComponentUpdate(){
        socket.on('managerSend', (data) => {
            if(data!==this.state.socketStudents[this.state.socketStudents.length-1])
            {
                this.setState(prevState=>({
                    socketStudents:[...prevState.socketStudents, data]
                })) 
               
            }
        });
        return true
    }

    render() {
      console.log(this.state)
        socket.emit('createClass',{ classId:this.state.classid});
        
        const Qr=(       
                <div >
                    <h1>
                        React QR Codes
                    </h1>
                    <QRCode
                    value={`http://yigitkurtcu.com/student/${this.state.classid}/joinRollCall/${this.props.lastQrId}`}
                    size={256}
                    bgColor='#fff'
                    fgColor='#000'
                    level='H'
                    />
                <div style={style.div}>
                <h1>
                        Yoklamaya Katılan Öğrenciler
                </h1>
                {
                    
                    this.state.socketStudents.map((student)=>
                        <List key={student.classId} divided relaxed>
                        <List.Item>
                        <List.Content floated='left'>
                            <List.Header>{student.fullName+" "+student.schoolNumber}</List.Header>
                        </List.Content>
                        </List.Item>
                        <Divider/>
                        </List> 
                    )

                }
                </div>
                </div>
                
        )

        return (
                <div>
                   {this.state.finished === false ? Qr : <Redirect to="/homePage/classes"/>}
                </div>
        );

    }
}

const mapStateToProps=(state)=>{
    return{
        classes:state.manager.classes,
        lastQrId:state.manager.lastQrId
    }
}

const style={

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

export default connect(mapStateToProps) (ClassQhere);