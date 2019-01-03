import React,{Component} from 'react'
import {connect} from 'react-redux'
import QRCode from 'react-qr-code';
import io from 'socket.io-client';
import {List, Divider} from 'semantic-ui-react'
import {getQrInfo,createQr} from '../actions/Manager'

if(process.env.REACT_APP_SECRET_CODE === "development ")
        {
            URL = io("http://localhost:3000");
        }
        else
        {
            URL = io("http://yigitkurtcu.com");
        }
const socket = io(URL);


class ClassQhere extends Component{

    constructor(props){
        super(props);
        this.state = { 
            Url:"",
            classid:"",
            socketStudents:[],
        };
    }

    componentWillMount(){
        if(process.env.REACT_APP_SECRET_CODE === "development")
        {
            this.setState({
                Url:"http://localhost:3000"
            })
        }
        else
        {

            this.setState({
                Url:"http://yigitkurtcu.com"
            })
        }
        const{match:{params}}=this.props;
        this.setState({
            classid:params._id,
        })
    }

    componentDidMount(){
        this.props.createQr(this.state.classid);
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
        console.log(`${this.state.classid}/joinRollCall/${this.props.lastQrId}`)
        socket.emit('createClass',{ classId:this.state.classid});
        const Qr=(       
                <div>
                    <h1>
                        React QR Codes
                    </h1>
                    <QRCode
                    value={`${this.state.classid}/joinRollCall/${this.props.lastQrId}`}
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
                        <List key={student.schoolNumber} divided relaxed>
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
                    {this.props.loading === false ? Qr : ""}
                </div>
        );

    }
}

const mapStateToProps=(state)=>{
    return{
        loading:state.manager.isLoading,
        classes:state.manager.classes,
        lastQrId:state.manager.lastQrId,
        qrInfo:state.manager.qrInfo
    }
}

const mapDispatchToProps={
    getQrInfo,
    createQr
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

export default connect(mapStateToProps,mapDispatchToProps) (ClassQhere);