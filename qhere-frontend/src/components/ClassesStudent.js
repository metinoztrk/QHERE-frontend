import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Card} from 'semantic-ui-react';
import {getStudentClasses} from '../actions/Student'

class Classes extends Component{
    
    componentDidMount(){
        this.props.getStudentClasses()
    }

    render(){
            return(
                <div  style={style.div}>
                 <h1>Derslerim</h1>
                 <Card.Group>
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
                         </Card>
                     ):""
                 }
                 </Card.Group>
                 </div>
        )
    }

}

const style={
    header:{
        float:'Left',
        fontSize: 16
    },
    list:{
        marginTop:50,
        marginLeft:175,
        padding:20,
        width: 600,
        borderStyle: 'groove',
        borderRadius: 25,
    },
    div:{
        margin:'auto',
        marginTop:50,
        marginLeft:150,
        marginRight:150,
        borderStyle: 'groove',
        borderRadius: 25,
        padding:20
    }
    
}

const mapStateToProps=(state)=>{
    return{
        isLoading:state.student.isLoading,
        myClasses:state.student.myClasses
    }
}

const mapDispatchToProps={
    getStudentClasses
}

export default connect(mapStateToProps,mapDispatchToProps) (Classes);