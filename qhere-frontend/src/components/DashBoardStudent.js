import React,{Component } from 'react'
import {Button,Card} from 'semantic-ui-react'
class DashBoard extends Component{


    componentWillMount(){
        this.props.getClasses()
    }

    render(){
        
        return(
           <div  style={style.div}>
            <h1>Dashboard</h1>
            <Card.Group>
            {
               
                this.props.isLoading===false ?
                this.props.openClasses.map((instance)=>
                    <Card key={instance._id}>
                      <Card.Content>
                        <Card.Header>Ders Adı:{instance.className}</Card.Header>
                        <Card.Header>Dersin Hocası:{instance.managerName}</Card.Header>
                        <Card.Description>
                            Ders devamsızlık sınırı:{instance.discontinuity}  
                        </Card.Description>
                        <Card.Description> 
                            Açıklama:{instance.description}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className='ui two buttons'>
                          <Button basic color='green' onClick={()=>this.props.joinClass(instance._id)}>
                            Katıl
                          </Button>
                        </div>
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
        width:750,
        margin:'auto',
        marginTop:50,
        marginLeft:20,
        marginRight:20,
        borderStyle: 'groove',
        borderRadius: 25,
        padding:20
    }
    
}

export default DashBoard;