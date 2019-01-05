import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Card,Button,Grid} from 'semantic-ui-react';
import  {Link} from 'react-router-dom';
import {getStudentClasses,getDiscontinuity,getRequestClasses} from '../actions/Student'

class Classes extends Component{
    
    componentDidMount(){
        this.props.getStudentClasses()
        this.props.getRequestClasses()
    }

    render(){

            return(
                <div>
                <Grid columns={2} divided>
                <Grid.Row>
                <div>
                
                <Grid.Column >
                <h1 style={style.header}>Derslerim</h1>
                <Card.Group style={style.div}>
                 {
                     this.props.isLoading===false ?
                     this.props.myClasses.map((instance)=>
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
                            <Button basic as={Link} to={`/homePage/classes/${instance._id}`} color='green' onClick={()=>this.props.getDiscontinuity(instance._id)}>
                                Ayrıntılar
                            </Button>
                            </div>
                            </Card.Content>
                       </Card>
                     ):""
                 }
                 </Card.Group>
                 </Grid.Column>
                 </div>
                 
                 <div style={style.form}>
                 <h1>Katılma İsteği yollanan dersler</h1>
                 <Grid.Column>
                 <Card.Group>
                 {
                     this.props.isLoading===false ?
                     this.props.requestClasses.map((instance)=>
                         <Card key={instance._id}>
                           <Card.Content>
                             <Card.Header>Ders Adı:{instance.className}</Card.Header>
                             <Card.Header>Dersin Hocası:{instance.managerName}</Card.Header>
                            </Card.Content>           
                       </Card>
                     ):""
                 }
                 </Card.Group>
                 </Grid.Column>
                 </div>
                 </Grid.Row>
                 </Grid>
                 </div>
        )
    }

}

const style={
    form:{
        marginTop:75,
        marginLeft:20,
        padding:20,
        width: 400,
        borderStyle: 'groove',
        borderRadius: 25,
    },
    div:{
        width:660,
        marginTop:20,
        marginLeft:50,
        marginRight:50,
        borderStyle: 'groove',
        borderRadius: 25,
        padding:20
    },
    header:{
        marginTop:20
    }
}

const mapStateToProps=(state)=>{
    return{
        isLoading:state.student.isLoading,
        myClasses:state.student.myClasses,
        requestClasses:state.student.requestClasses
    }
}

const mapDispatchToProps={
    getStudentClasses,
    getDiscontinuity,
    getRequestClasses
}

export default connect(mapStateToProps,mapDispatchToProps) (Classes);