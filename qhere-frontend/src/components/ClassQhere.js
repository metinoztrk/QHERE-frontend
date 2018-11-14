import React,{Component} from 'react'
import {connect} from 'react-redux'
import QRCode from 'react-qr-code';
import {Redirect} from 'react-router-dom'
class ClassQhere extends Component{

    state={
        classid:"",
        weekNumber:"",
        finished:false
    }

    componentWillMount(){
        var _id = window.location.pathname.slice(18, 42);
            this.setState({
                classid:_id,
            })

        this.props.classes.find(instance=>{
                if(instance._id===_id)
                {
                    this.setState({
                        weekNumber:instance.qheres.length
                    })
                    if(instance.qheres.length===15){
                        this.setState({
                            finished:true
                        })
                    }
                }
        })
    }

    componentWillReceiveProps(){
        console.log("a")
    }
  
    render() {
        console.log(this.props.classes)

        const Qr=(
            <div>
                    <h1>
                        React QR Codes
                    </h1>
                    <QRCode
                    value={`http://localhost:3000/student/${this.state.weekNumber}/joinRollCall/${this.state.classid}`}
                    size={256}
                    bgColor='#fff'
                    fgColor='#000'
                    level='H'
                    />
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
        classes:state.manager.classes
    }
}

export default connect(mapStateToProps) (ClassQhere);