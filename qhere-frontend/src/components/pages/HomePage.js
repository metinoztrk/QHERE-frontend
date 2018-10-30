import React ,{Component} from 'react';
import {connect} from 'react-redux'
import {
    Button,
    Container,
    Menu,
    Responsive,
    Segment,
    Visibility,
    Grid
  } from 'semantic-ui-react'
import {logout,reload} from '../../actions/Users'
import DashBoard from '../DashBoard';
import {Link ,Redirect} from 'react-router-dom';
class HomePage extends Component{
    state = {
        isHome:true,
        isDashBoard:true
    }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    componentWillMount(){
        this.props.reload()
        if(window.location.pathname === '/')
        {
            this.setState({
                isHome:false
            })
        }
        if(window.location.pathname !== '/homePage'){
            this.setState({
                isDashBoard:false
            })
        }
    }

    componentWillReceiveProps(){
        if(window.location.pathname === '/')
        {
            this.setState({
                isHome:false
            })
        }else{
            this.setState({
                isHome:true
            })
        }
        if(window.location.pathname === '/homePage'){
            this.setState({
                isDashBoard:true
            })
        }else{
            this.setState({
                isDashBoard:false
            })
        }
    }

    onSubmit=()=>(
        this.setState({
            isHome:false
        },
        this.props.logout() 
        )    
    )

    render(){
        
        const { fixed } = this.state

        const dashBoard=(
                <div>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <DashBoard/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid> 
                </div>
        )

        
        return(
            <div>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                    >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 75, padding: '1em 0em'  , backgroundColor: '#009c95'}}
                        vertical
                    >
                        <Menu
                        fixed={fixed ? 'top' : null}
                        secondary={!fixed}
                        size='large'
                        style={fixed === true ?  { backgroundColor:'#009c95'} : { backgroundColor:'#009c95'}}
                       
                        >
                        <Container>
                            <Menu.Item as={Link} to="/homePage" style={{ marginLeft: '5em' , color:'#FFFFFF' }}>
                            Home
                            </Menu.Item>
                            <Menu.Item as={Link} to="/homePage/createClass" style={{ marginLeft: '5em' , color:'#FFFFFF' }}>Create Class</Menu.Item>
                            <Menu.Item as={Link} to="/homePage/classes" style={{ marginLeft: '5em' , color:'#FFFFFF' }}>Classes</Menu.Item>
                            <Menu.Item position='right'>
                            <Button inverted={!fixed} primary={fixed} style={{ marginRight: '5em' }} onClick={this.onSubmit}>
                                Logout
                            </Button>
                            </Menu.Item>
                        </Container>
                        </Menu>
                    </Segment>
                    </Visibility>
                </Responsive>
                {this.state.isHome === true ? "" : <Redirect to="/"/>}
                {this.state.isDashBoard === true ? dashBoard : ""}
            </div>
        )
        
    }

}

const mapStateToProps=(state)=>{
    return {
        users:state.users
    }
}

const mapDispatchToProps={
    logout,
    reload
}

export default connect(mapStateToProps,mapDispatchToProps) (HomePage);