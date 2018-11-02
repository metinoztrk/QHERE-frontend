import React,{Component} from 'react'
import {List,Button} from 'semantic-ui-react'

class ClassInfo extends Component{

    state={
        ClassId:""
    }

    componentWillMount(){
        var id = window.location.pathname.slice(18,42);
        this.setState({
            ClassId:id
        })
    }

    render(){
        return(
            <div style={style.div}>
            <List divided relaxed>
                <List.Item>
                <List.Content>
                    <List.Header style={style.header}>Veri Madenciliği</List.Header>
                    <Button color='red' style={style.button}>Sil</Button>
                    <Button color='yellow' style={style.button}>Düzenle</Button>  
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Content>
                    <List.Header style={style.header}>Kontenjan</List.Header>
                    <List.Description>24</List.Description>
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Content>
                    <List.Header style={style.header}>Devamsızlık</List.Header>
                    <List.Description>3</List.Description>
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Content>
                    <List.Header style={style.header}>Açıklama</List.Header>
                    <List.Description>Laptop Getirilmeli</List.Description>
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Content>
                    <List.Header style={style.header}>Öğrenciler</List.Header>
                    <List.Description>Öğrenciler Listelenecek</List.Description>
                </List.Content>
                </List.Item>
            </List>
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

export default ClassInfo