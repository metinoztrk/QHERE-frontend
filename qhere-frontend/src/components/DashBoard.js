import React,{Component } from 'react'
import {List,Button,Divider} from 'semantic-ui-react'
class DashBoard extends Component{

    render(){
        return(
            <div  style={style.div}>
                <h1>Dashboard</h1>
                <List  relaxed style={style.list}>
                        <List.Item >
                        <List.Content floated='left'>
                            <List.Header as='a' style={style.header}>Metin Öztürk Matematik dersine katılma isteğinde bulundu.</List.Header>
                        </List.Content>
                        <List.Content floated='right'>
                            <Button style={style.button}>Kabul</Button>
                            <Button color='red' style={{padding:12}}>Reddet</Button>
                        </List.Content>
                        </List.Item>
                        <Divider />
                        <List.Item >
                        <List.Content floated='left'>
                            <List.Header as='a' style={style.header}>Metin Öztürk Algoritma dersine katılma isteğinde bulundu.</List.Header>
                        </List.Content>
                        <List.Content floated='right'>
                            <Button style={style.button}>Kabul</Button>
                            <Button color='red' style={{padding:12}}>Reddet</Button>
                        </List.Content>
                        </List.Item>
                        <Divider />
                        <List.Item >
                        <List.Content floated='left'>
                            <List.Header as='a' style={style.header}>Yiğit Kurtçu Fizik dersine katılma isteğinde bulundu.</List.Header>
                        </List.Content>
                        <List.Content floated='right'>
                            <Button style={style.button}>Kabul</Button>
                            <Button color='red' style={{padding:12}}>Reddet</Button>
                        </List.Content>
                        </List.Item>
                        <Divider />
                        <List.Item >
                        <List.Content floated='left'>
                            <List.Header as='a' style={style.header}>Yiğit Kurtçu Matematik dersine katılma isteğinde bulundu.</List.Header>
                        </List.Content>
                        <List.Content floated='right'>
                            <Button style={style.button}>Kabul</Button>
                            <Button color='red' style={{padding:12}}>Reddet</Button>
                        </List.Content>
                        </List.Item>
                        <Divider />
                </List>
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