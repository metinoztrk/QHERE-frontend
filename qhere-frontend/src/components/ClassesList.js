import React,{Component} from 'react'
import {List,Button, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class ClassesList extends Component{

    render(){

        return(
            <div style={style.div}>
                { 
                    this.props.classes.map((Class)=>
                                <List key={Class._id} divided relaxed style={style.list}>
                                    <List.Item>
                                    <List.Content as={Link} to={`/homePage/classes/${Class._id}/info`} floated='left'>
                                        <List.Header style={style.header}>{Class.className}</List.Header>
                                    </List.Content>
                                    <List.Content as={Link} to={`/homePage/classes/${Class._id}/Qhere`} floated='right'>
                                        <Button style={style.button}>QHERE</Button>
                                    </List.Content>
                                    </List.Item>
                                    <Divider/>
                                </List>   
                    ) 
                }
            </div>
        )
    }
}

const style={
    list:{
        margin:'auto',
        marginTop:10,
        width:500
    },
    header:{
        marginTop:10,
        fontSize: 16
    },
    button:{
        backgroundColor:'#0fd0c7',
        padding:12,
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

export default ClassesList;