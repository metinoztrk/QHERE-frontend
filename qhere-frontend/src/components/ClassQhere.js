import React,{Component} from 'react'
import QRCode from 'react-qr-code';
class ClassQhere extends Component{

    state={
        classid:"",
    }

    componentWillMount(){
        var _id = window.location.pathname.slice(18, 42);
            this.setState({
                classid:_id,
            })
    }
  
    render() {
        console.log(this.state)
        return (
            <div>
                    <h1>
                        React QR Codes
                    </h1>
                    <QRCode
                    value={`http://localhost:3000/student/QrModeldenGelcek/joinRollCall/${this.state.classid}`}
                    size={256}
                    bgColor='#fff'
                    fgColor='#000'
                    level='H'
                    />
            </div>
        );

    }
}

export default ClassQhere;