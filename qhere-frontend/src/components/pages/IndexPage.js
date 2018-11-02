import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { Button ,Responsive,Visibility,Segment,Menu,Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class IndexPage extends Component{

    state={
        isIndex:false
    }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    componentWillMount(){
        
        if(window.location.pathname === '/')
        {   
            this.setState({
                isIndex:true
            }) 
        }else{
            this.setState({
                isIndex:false,
            })
        }
    }

    componentWillReceiveProps(){
        if(window.location.pathname === '/')
        {
                this.setState({
                    isIndex:true
                })    
        }else{
           
            this.setState({
                isIndex:false,
            })
        }
    }

    render(){
        const { fixed } = this.state

        const index=(
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
                        <Menu.Item as={Link} to="/" style={{ marginLeft: '5em' , color:'#FFFFFF' }}>
                        QHERE Nedir?
                        </Menu.Item>
                        <Menu.Item position='right'>
                        <Link to="/register"> 
                            <Button inverted={!fixed} primary={fixed} style={{ marginRight: '1em' }}>
                                Register
                            </Button>
                        </Link>
                        <Link to="/login"> 
                            <Button inverted={!fixed} primary={fixed} style={{ marginRight: '5em' }}>
                                Login
                            </Button>
                        </Link>
                        </Menu.Item>
                    </Container>
                    </Menu>
                </Segment>
                </Visibility>
            </Responsive>
        )

        return(
            <div>
            { localStorage.token === undefined ? index : "" }
            { this.state.isIndex === true ? <h1>QHERE hakkında bilgi</h1> : "" }
            </div>
        )  
    
    }
}

const mapStateToProps=(state)=>{
    return {
        isLogin:state.users.isLogin,
        state:state.users
    }
}


export default connect(mapStateToProps) (IndexPage);