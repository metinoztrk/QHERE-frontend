import React ,{Component} from 'react';
import {connect} from 'react-redux';
import IndexPage from './pages/IndexPage';
import HomePage from './pages/HomePage';
class Header extends Component{

    render(){
        return(
            <div>
                {
                    this.props.Users.isLogin ?  <HomePage/> : <IndexPage Users={this.props.Users}/> 
                }
            </div>
        )
    }

}

const mapStateToProps=(state)=>{
    return{
        Users:state.users,
    }
}

const mapDispatchToProps={
  }

export default connect(mapStateToProps,mapDispatchToProps) (Header);