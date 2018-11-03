import React,{Component} from 'react'
import {connect} from 'react-redux'
import {List,Button} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'

class ClassInfo extends Component{

    state={
        id:"",
        class:""
    }

    componentWillMount(){
        var _id = window.location.pathname.slice(18, 42);
        var classes=this.props.classes
        classes.find(instance=>{
            if(instance._id===_id)
            {
                this.setState({
                    id:_id,
                    class:instance
                })
            }
        })
    }

    render(){
        console.log(this.state)
        const Info=(
            <div style={style.div}>
            <List divided relaxed>
                <List.Item>
                <List.Content>
                    <List.Header style={style.header}>{this.state.class.className}</List.Header>
                    <Button color='red' style={style.button}>Sil</Button>
                    <Button color='yellow' style={style.button}>Düzenle</Button>  
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Content>
                    <List.Header style={style.header}>Kontenjan</List.Header>
                    <List.Description>{this.state.class.quota}</List.Description>
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Content>
                    <List.Header style={style.header}>Devamsızlık</List.Header>
                    <List.Description>{this.state.class.discontinuity}</List.Description>
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Content>
                    <List.Header style={style.header}>Açıklama</List.Header>
                    <List.Description>{this.state.class.description}</List.Description>
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Content>
                    <List.Header style={style.header}>Öğrenciler</List.Header>
                    <List.Description>{this.state.class.students}</List.Description>
                </List.Content>
                </List.Item>
            </List>
        </div>
        )

        return(
            <div>
                { this.props.classes.length === 0 ? <Redirect to="/homePage"/> : Info }
            </div>
        )
    }
}

const style={
    header:{
        float:'Left',
        fontSize: 16
    },
    button:{
        float:'Right',
        padding:10,
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

const mapStateToProps=(state)=>{
    return{
        classes:state.manager.classes
    }
}

export default connect(mapStateToProps) (ClassInfo)