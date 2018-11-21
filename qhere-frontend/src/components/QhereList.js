import React,{Component} from 'react';
import { Button, Icon,Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class QhereList extends Component{

    render(){
        console.log(this.props)
        return(
            <div>
                <Grid columns='five'>   
                    <Grid.Row> 
                    {
                        this.props.class.qheres.map((instance)=>
                            <Grid.Column key={instance._id} style={style.row}>
                                <Button animated as={Link} to={`/homePage/classes/${this.props.class._id}/qrInfo/${instance._id}`}>
                                <Button.Content visible>{instance.number}. Hafta</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='arrow right' />
                                </Button.Content>
                                </Button>
                            </Grid.Column>
                        )
                    }
                    </Grid.Row>
                </Grid>   
          </div>
        )
    }
}

const style={
    row:{
        marginBottom:10,
        marginTop:10,
    }
}

export default QhereList;