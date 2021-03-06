import React,{Component} from 'react'
import { Table } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {getQrInfo} from '../actions/Manager'

class QhereInfo extends Component{

    componentDidMount(){
        const{match:{params}}=this.props;
         this.props.getQrInfo(params.id);
    }

    render(){
        return(
            <div style={style.qrInfo}>
            <h1>{this.props.qrInfo.number} Hafta Yoklamaya Katılan Öğrenciler</h1>
            <Table striped>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Okul Numarası</Table.HeaderCell>
                    <Table.HeaderCell>Adı Soyadı</Table.HeaderCell>
                    <Table.HeaderCell>E-mail</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                    { this.props.qrInfo.length === 0 ? "": this.props.qrInfo.students.map((instance)=>
                        <Table.Row key={instance._id}>
                            <Table.Cell>{instance.schoolNumber}</Table.Cell>
                            <Table.Cell>{instance.fullName}</Table.Cell>
                            <Table.Cell>{instance.email}</Table.Cell>
                        </Table.Row>
                    )} 
                 </Table.Body>
            </Table>
            </div>
                
        )
    }

}

const style={
    qrInfo:{
        margin:'auto',
        marginTop:50,
        width: 500
    }
}

const mapStateToProps=(state)=>{
    return{
        state:state,
        qrInfo:state.manager.qrInfo
    }
}

const mapDispatchToProps={
    getQrInfo
}

export default connect(mapStateToProps,mapDispatchToProps) (QhereInfo);