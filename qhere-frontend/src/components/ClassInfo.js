import React,{Component} from 'react'
import {connect} from 'react-redux'
import {List,Button,Table, TableBody} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {deleteClass,editClass,getClasses} from '../actions/Manager'
import InfoStudentList from './InfoStudentList'
import {Link} from 'react-router-dom';

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

    onDelete=()=>{
        this.props.deleteClass(this.state.id)
        this.props.getClasses()
    }

    render(){

        const Info=(
            <div style={style.div}>
            <List divided relaxed>
                <List.Item>
                <List.Content>
                    <List.Header style={style.header}>{this.state.class.className}</List.Header>
                    <Button as={Link} to={'/homePage/classes'} color='red' style={style.button} onClick={this.onDelete}>Sil</Button>
                    <Button as={Link} to={`/homePage/createClass/${this.state.id}`} color='yellow' style={style.button} onClick={()=>this.props.editClass(this.state.id)}>Düzenle</Button>  
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
                    <List.Header style={style.studentHeader}>Öğrenciler</List.Header>
                    <List.Description>
                        <Table>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Adı Soyadı</Table.HeaderCell>
                            <Table.HeaderCell>Okul Numarası</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>
                        <TableBody>
                            <InfoStudentList student={this.state.class.students}/>
                        </TableBody>
                        </Table>
                    </List.Description>
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
    },
    studentHeader:{
        float:'Left',
        fontSize: 16,
        marginBottom:12
    }
    
}

const mapStateToProps=(state)=>{
    return{
        classes:state.manager.classes
    }
}

const mapDispatchToProps={
    deleteClass,
    editClass,
    getClasses
}

export default connect(mapStateToProps,mapDispatchToProps) (ClassInfo)