import React,{Component} from 'react';
import {connect} from 'react-redux'
import ClassesList from '../components/ClassesList'
import {getClasses} from '../actions/Manager'
class Classes extends Component{

    componentWillMount(){
        this.props.getClasses()
    }

    render(){
        return(
            <div>
                <h1>Dersler</h1>
                <ClassesList classes={this.props.classes} getClasses={this.props.getClasses}/>
            </div>
        )
    }

}

const mapStateToProps=(state)=>{
    return{
        classes:state.manager.classes,
        getClasses:state
    }
}

const mapDispatchToProps={
    getClasses
}

export default connect(mapStateToProps,mapDispatchToProps) (Classes)