import React,{Component} from 'react'
import {connect} from 'react-redux'
import {List,Grid,Menu } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {getDiscontinuity,getStudentClasses} from '../actions/Student'

class ClassInfoStudent extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            id:"",
            class:"",
            qhereCount:"",
            weeksNumber:[]
        };
    }

    componentDidUpdate(previousProps, previousState){
        if(previousProps.weeks.weeksInfo.length!==0 && previousState.weeksNumber.length===0)
        {
            var _id = window.location.pathname.slice(18, 42); 
            var classes=this.props.classes
            classes.find(instance=>{
                if(instance._id===_id)
                {
                    this.setState({
                        id:_id,
                        class:instance,
                        qhereCount:this.props.weeks.qhereCount,
                        weeksNumber:this.props.weeks.weeksInfo,
                    })
                }
                return null;
            }) 
        }
    }

    componentWillMount(){
        var _id = window.location.pathname.slice(18, 42); 
        this.props.getDiscontinuity(_id)
        this.props.getStudentClasses()
        var classes=this.props.classes
        classes.find(instance=>{
            if(instance._id===_id)
            {
                this.setState({
                    id:_id,
                    class:instance,
                    qhereCount:this.props.weeks.qhereCount,
                    weeksNumber:this.props.weeks.weeksInfo
                })
            }
            return null;
        })
    }


    render(){
        
        
        const createWeek = () => {
            
            let week = []
            for (let i = 0; i < this.props.weeks.qhereCount; i++) {
                var res=this.props.weeks.weeksInfo.find((instance)=>
                    instance.weekNumber===i+1
                    ? 
                    week.push(<Grid.Column key={i+1} style={style.grid}><Menu.Item   style={{backgroundColor:"#24D35C"}}>{i+1+'. Hafta'}</Menu.Item></Grid.Column>)
                    :
                    null
                )
                if(res===undefined)
                    week.push(<Grid.Column key={i+1} style={style.grid}><Menu.Item  style={{backgroundColor:"#F53A3A"}}>{i+1+'. Hafta'}</Menu.Item></Grid.Column>)
            }
            return week
          }

        const info=(
            <div style={style.list}>
            <Grid>
                <Grid.Column>
                    <List divided relaxed>
                        <List.Item>
                        <List.Content>
                            <List.Header style={style.header}>Eğitmen Adı</List.Header>
                            <List.Description>{this.state.class.managerName}</List.Description>
                        </List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Content>
                            <List.Header style={style.header}>Ders Adı</List.Header>
                            <List.Description>{this.state.class.className}</List.Description>
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
                            <List.Header style={style.header}>Devamsızlık Hakkı</List.Header>
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
                            <List.Header style={style.studentHeader}>Haftalar</List.Header>
                            </List.Content>
                        <List.Item>
                            <Menu compact>
                                <Grid columns={5} divided>
                                    <Grid.Row>   
                                            {createWeek()}
                                    </Grid.Row>
                                </Grid>       
                            </Menu> 
                        </List.Item>
                        </List.Item>
                    </List>
                </Grid.Column>
            </Grid>
        </div>
        )

        return(
            <div>
                { this.props.isLoading===false && this.props.classes.length !==0 ? info : "" }
                { this.props.classes.length === 0 ? <Redirect to="/homePage"/> :"" }
            </div>
        )
    }
}


const style={
    header:{
        float:'Left',
        fontSize: 16
    },
    studentHeader:{
        float:'Left',
        fontSize: 16,
        marginBottom:12
    },
    table:{
        border:'hidden'
    },
    list:{
        marginTop:50,
        marginLeft:175,
        padding:20,
        width: 650,
        borderStyle: 'groove',
        borderRadius: 25,
    },
    grid:{
        marginTop:10,
        marginBottom:10,
    }
    
}

const mapStateToProps=(state)=>{
    return{
        classes:state.student.myClasses,
        weeks:state.student.weeks,
        isLoading:state.student.isLoading
    }
}

const mapDispatchToProps={
    getDiscontinuity,
    getStudentClasses
}

export default connect(mapStateToProps,mapDispatchToProps) (ClassInfoStudent);