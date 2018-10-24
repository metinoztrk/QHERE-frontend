import React,{Component} from 'react';
import {Grid, Menu, Segment} from 'semantic-ui-react'
import YeniAyarlar from './YeniAyarlar'
import PasswordChangeForm from '../components/PasswordChangeForm'

class AccontSetting extends Component{

    state = { activeItem: 'passwordChange' }

    handleItemClick = (e, { name }) => 
        this.setState({ activeItem: name })

    render(){
        const { activeItem } = this.state
        console.log(activeItem)
        return(
            <div>
                <Grid style={style.Grid}> 
                    <Grid.Column width={4}>
                    <Menu fluid vertical tabular>
                        <Menu.Item name='passwordChange' active={activeItem === 'passwordChange'} onClick={this.handleItemClick} />
                        <Menu.Item name='YeniAyarlar' active={activeItem === 'YeniAyarlar'} onClick={this.handleItemClick} />
                    </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={12}>
                    <Segment>
                        {activeItem==='passwordChange' ? <PasswordChangeForm/> : <YeniAyarlar/>}
                    </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const style={
    Grid:{
        margin:'auto',
        width:750,
        marginTop:20,
        marginRight:40,
        marginLeft:40
    }
}


export default AccontSetting;