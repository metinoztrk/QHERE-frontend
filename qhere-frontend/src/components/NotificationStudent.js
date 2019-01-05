import React ,{Component} from 'react';
import {Card, Label} from 'semantic-ui-react'

class NotificationStudent extends Component{

    componentDidMount(){  
        this.props.getNotification();
    }

    onSubmit=(instance)=>{
        this.props.readNotification(instance._id)
         
    }

    render(){
        return(
            <div style={style.div}><h1>Duyurular</h1>
            <Card.Group>
                {
                    this.props.notification.map((instance)=> 
                    <Card key={instance._id} onClick={()=>this.onSubmit(instance)} style={ (instance.isRead=== true ? { backgroundColor:'#ffffff'}: { backgroundColor:'#b9b7b8'}) && style.card}>  
                    <Label>Ders Adı:{instance.className}</Label>
                    <Card.Content key={instance._id}>
                        <Card.Header>Duyuru Başlığı:{instance.title}</Card.Header>
                        <Card.Content>Duyuru İçeriği:{instance.content}</Card.Content>
                        <Card.Description>Paylaşım Saati:{instance.sendDate}</Card.Description>
                    </Card.Content>
                    </Card>
                    )
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
        marginLeft:50,
        marginRight:20,
        borderStyle: 'groove',
        borderRadius: 25,
        padding:20
    },
    card:{
        width:350,
        margin:'auto',
    }
    
}

export default NotificationStudent;

