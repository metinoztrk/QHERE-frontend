import React ,{Component} from 'react';
import {Card,Checkbox, Label} from 'semantic-ui-react'

class NotificationStudent extends Component{

    componentDidMount(){  
        this.props.getNotification();
    }

    
    render(){
        console.log(this.props.notification)
        return(
            <div style={style.div}><h1>Duyurular</h1>
            <Card.Group>
                {
                    this.props.isNotification===false ?
                    this.props.notification.map((instance)=>
                    <Card key={instance._id} style={style.card}>  
                    <Checkbox style={style.checkbox} onClick={()=>{this.props.readNotification(instance._id)}}/>
                    <Label>Ders Adı:{instance.className}</Label>
                    <Card.Content key={instance._id}>
                        <Card.Header>Duyuru Başlığı:{instance.title}</Card.Header>
                        <Card.Content>Duyuru İçeriği:{instance.content}</Card.Content>
                        <Card.Description>Paylaşım Saati:{instance.sendDate}</Card.Description>
                    </Card.Content>
                    </Card>
                    ):""
                }
                
            </Card.Group>    
            </div>
        )
    }
}

const style={

    div:{
        width:400,
        float:'right',
        marginTop:50,
        marginLeft:20,
        marginRight:50,
        borderStyle: 'groove',
        borderRadius: 25,
        padding:20
    },
    checkbox:{
        marginTop:1,
        marginLeft:330
    },
    card:{
        width:350
    }
    
}

export default NotificationStudent;

