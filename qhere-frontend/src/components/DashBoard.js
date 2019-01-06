import React,{Component } from 'react'
import DashBoardItem from './DashBoardItem'

class DashBoard extends Component{


    componentDidMount(){
        this.props.getClassesRequest()
    }

    render(){
        return(
            <div  style={style.div}>
            <h1>Ana Sayfa</h1>
            {
                this.props.loading===false ?
                <DashBoardItem actions={this.props}/>:""
            }
            </div>
        )
    }

}

const style={

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