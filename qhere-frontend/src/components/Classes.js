import React,{Component} from 'react';
import {List,Button,Accordion,Divider} from 'semantic-ui-react'
class Classes extends Component{
    state = { activeIndex: -1 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render(){ 

        const { activeIndex } = this.state
       
        return(
            <div style={style.div}>
            <h1>Dersler</h1>
            <Accordion >
            <Accordion.Title  active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <List divided relaxed style={style.list}>
                        <List.Item>
                        <List.Content floated='left'>
                            <List.Header as='a' style={style.header}>Algoritma</List.Header>
                        </List.Content>
                        <List.Content floated='right'>
                            <Button style={style.button}>QHERE</Button>
                            <Button color='yellow' style={{padding:12}}>Düzenle</Button>
                            <Button color='red' style={{padding:12}}>Sil</Button>
                        </List.Content>
                        </List.Item>
                </List>
            </Accordion.Title>
            <Divider />
            <Accordion.Content active={activeIndex === 0}>
              <p>
                 Ders Ayrıntıları
              </p>
            </Accordion.Content>
            <Accordion.Title  active={activeIndex === 1} index={1} onClick={this.handleClick}>
                <List divided relaxed style={style.list}>
                        <List.Item>
                        <List.Content floated='left'>
                            <List.Header as='a' style={style.header}>Matematik</List.Header>
                        </List.Content>
                        <List.Content floated='right'>
                            <Button style={style.button}>QHERE</Button>
                            <Button color='yellow' style={{padding:12}}>Düzenle</Button>
                            <Button color='red' style={{padding:12}}>Sil</Button>
                        </List.Content>
                        </List.Item>
                </List>
            </Accordion.Title>
            <Divider />
            <Accordion.Content active={activeIndex === 1}>
              <p>
                 Ders Ayrıntıları
              </p>
            </Accordion.Content>
            <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                <List  relaxed style={style.list}>
                        <List.Item>
                        <List.Content floated='left'>
                            <List.Header as='a' style={style.header}>Fizik</List.Header>
                        </List.Content>
                        <List.Content floated='right'>
                            <Button style={style.button}>QHERE</Button>
                            <Button color='yellow' style={{padding:12}}>Düzenle</Button>
                            <Button color='red' style={{padding:12}}>Sil</Button>
                        </List.Content>
                        </List.Item>
                </List>
            </Accordion.Title>
            <Divider />
            <Accordion.Content active={activeIndex === 2}>
              <p>
                 Ders Ayrıntıları
              </p>
            </Accordion.Content>
          </Accordion>
          
          </div>
        )
    }
}

const style={
    list:{
        margin:'auto',
        marginTop:10,
        width:500
    },
    header:{
        marginTop:10,
        fontSize: 16
    },
    button:{
        backgroundColor:'#0fd0c7',
        padding:12,
    },
    div:{
        margin:'auto',
        marginTop:50,
        marginLeft:300,
        marginRight:300,
        borderStyle: 'groove',
        borderRadius: 25,
        padding:20
    }
    
}

export default Classes;