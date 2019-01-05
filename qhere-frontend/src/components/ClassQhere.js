import React,{Component} from 'react'
import {connect} from 'react-redux'
import QRCode from 'react-qr-code';
import io from 'socket.io-client';
import {Table,TableBody,Button,Confirm} from 'semantic-ui-react'
import {getQrInfo,createQr,finishQhere} from '../actions/Manager'
import {Redirect } from 'react-router-dom';
const socket = io("http://yigitkurtcu.com");


class ClassQhere extends Component{

    constructor(props){
        super(props);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.state = { 
            Url:"",
            classid:"",
            className:"",
            quota:"",
            socketStudents:[],
            redirect:false
        };
    }

    show = () => this.setState({ open: true })

    handleConfirm(){
        this.setState({ open: false,confirm:true,redirect:true})
        this.props.finishQhere(this.state.classid) 
    }
    handleCancel(){
         this.setState({ open: false })
    }

    componentWillMount(){
        if(process.env.REACT_APP_SECRET_CODE === "development ")
        {
            this.setState({
                Url:"http://localhost:3000",
            })
        }
        else
        {

            this.setState({
                Url:"http://yigitkurtcu.com",
            })
        }
        const{match:{params}}=this.props;
        this.props.classes.map(instance=>{
            if(instance._id===params._id)
                this.setState({
                    className:instance.className,
                    quota:instance.quota,
                    classid:params._id,
                })
        });

    }

    componentDidMount(){
        if(this.state.classid==="")
        {
            const{match:{params}}=this.props;
            this.setState({redirect:true})
            this.props.finishQhere(params._id) 
            console.log("sayfa yenilendiğinde")
        }
        else{
            console.log("ilk calışma")
            this.props.createQr(this.state.classid);
        }
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
        socket.emit('createClass',{ classId:this.state.classid});
        const Qr=(       
                <div>
                    <h1 style={style.header}>
                       {this.state.className}
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
                <Table>
                <Table.Header>
                    
                    <Table.Row>
                        <Table.HeaderCell>Adı Soyadı</Table.HeaderCell>
                        <Table.HeaderCell>Okul Numarası</Table.HeaderCell>
                        <Table.HeaderCell>{this.state.socketStudents.length+"/"+this.state.quota}</Table.HeaderCell>
                        <Table.HeaderCell>
                        <Button color='red' style={style.button} onClick={this.show}>Qr Kapat</Button>
                                        <Confirm
                                        content="Qr kodu kapatmak istiyor musunuz?"
                                        open={this.state.open}
                                        onCancel={this.handleCancel}
                                        onConfirm={this.handleConfirm}
                                        />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <TableBody>
                {
                    this.state.socketStudents.map((student)=>
                    <Table.Row key={student.schoolNumber}>
                     <Table.Cell>
                        {student.fullName}
                     </Table.Cell>
                     <Table.Cell>
                        {student.schoolNumber}
                     </Table.Cell>
                     <Table.Cell>
                     </Table.Cell>
                    </Table.Row>
                    )
                }
                </TableBody>
                </Table>
                </div>
                </div>
                
        )

        return (
                <div>
                    {this.props.loading === false ? Qr : ""}
                    {this.state.redirect === true ? <Redirect  to={`/homePage/classes`}/>:""}
                </div>
        );

    }
}

const mapStateToProps=(state)=>{
    return{
        classes:state.manager.classes,
        loading:state.manager.isLoading,
        lastQrId:state.manager.lastQrId,
        qrInfo:state.manager.qrInfo
    }
}

const mapDispatchToProps={
    getQrInfo,
    createQr,
    finishQhere
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
    },
    header:{
        marginTop:20
    },
    button:{
        padding:12,
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps) (ClassQhere);