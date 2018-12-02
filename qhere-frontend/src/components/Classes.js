import React,{Component} from 'react';
import {connect} from 'react-redux'
import ClassesList from '../components/ClassesList'
import {getClasses,createQr} from '../actions/Manager'
class Classes extends Component{

    componentWillMount(){
        this.props.getClasses()
    }

    render(){
        return(
            <div>
                <h1>Dersler</h1>
                {this.props.loading===false ?<ClassesList classes={this.props.classes} createQr={this.props.createQr}/> : "" }
            </div>
        )
    }

}

const mapStateToProps=(state)=>{
    return{
        loading:state.manager.isLoading,
        classes:state.manager.classes,
        getClasses:state,
        createQr:state
    }
}

const mapDispatchToProps={
    getClasses,
    createQr
}

export default connect(mapStateToProps,mapDispatchToProps) (Classes)