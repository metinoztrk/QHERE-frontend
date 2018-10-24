import React ,{Component} from 'react';
import {
    Button,
    Container,
    Menu,
    Responsive,
    Segment,
    Visibility,
    Grid
  } from 'semantic-ui-react'
import DashBoard from '../DashBoard';
import {Link } from 'react-router-dom';
class HomePage extends Component{
    state = {
        isHome:true
    }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    componentWillMount(){
        if(window.location.pathname !== '/homePage')
        {
            this.setState({
                isHome:false
            })
        }
    }

    componentWillReceiveProps(){
        if(window.location.pathname !== '/homePage')
        {
            this.setState({
                isHome:false
            })
        }else{
            this.setState({
                isHome:true
            })
        }
    }

    render(){
        console.log(this.state)
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
                            <Menu.Item as={Link} to="/homePage/accontSetting" style={{ marginLeft: '5em' , color:'#FFFFFF' }}>Accont Setting</Menu.Item>
                            <Menu.Item position='right'>
                            <Button inverted={!fixed} primary={fixed} style={{ marginRight: '5em' }}>
                                Logout
                            </Button>
                            </Menu.Item>
                        </Container>
                        </Menu>
                    </Segment>
                    </Visibility>
                </Responsive>
                {this.state.isHome === true ? dashBoard : ""}
            </div>
        )
        
    }

}


export default HomePage;