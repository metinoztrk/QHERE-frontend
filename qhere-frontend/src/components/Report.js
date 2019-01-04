import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Bar} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import {makeReport} from '../actions/Manager';
import {Redirect} from 'react-router-dom'
class Report extends Component{

    constructor(props) {
        super(props);

        this.state = { 
            id:"",
            redirect:false,
        };
    }

    componentWillMount(){
        if(this.props.className==="")
        this.setState({
            redirect:true
        })
    }

    componentDidMount(){
        const{match:{params}}=this.props;

        this.props.makeReport(params.id)
    }

    render(){
        const obj=[]
        this.props.reportData.map(data=>obj.push(data.studentCount))
        

        const data= {
            labels: ["1. Hafta", 
                    "2. Hafta", 
                    "3. Hafta", 
                    "4. Hafta", 
                    "5. Hafta", 
                    "6. Hafta",
                    "7. Hafta",
                    "8. Hafta",
                    "9. Hafta",
                    "10. Hafta",
                    "11. Hafta",
                    "12. Hafta",
                    "13. Hafta",
                    "14. Hafta",
                    "15. Hafta"],
            datasets: [{
                label:"Ders Katılım",
                data:obj ,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                ],
                borderWidth: 1
            }]
        }

        const options = {
            annotation: {
                 annotations: [{
                     drawTime: 'afterDatasetsDraw',
                     borderColor: 'red',
                     borderDash: [2, 2],
                     borderWidth: 2,
                     mode: 'vertical',
                     type: 'line',
                     value: 10,
                     scaleID: 'x-axis-0',
               }]
            },
            maintainAspectRation: false
        };

        return(
            <div class="ui centered grid" style={style.div}>
            <div class="ten wide tablet ten wide computer column">
            <h1 style={style.text}>{this.props.className +" dersi katılım raporu"}</h1>
            <Bar
	         data={data}
	         options={options}
             />
             </div>
             {this.state.redirect===true  ? <Redirect to="/homePage/classes"/> :""}
             </div>
        )
    }
}

const style={
    div:{
        marginTop:20,
    },
    text:{
        display: 'flex',
        justifyContent: 'center'
    }
}

const mapStateToProps=(state)=>{
    return{
        reportData:state.manager.makeReport,
        className:state.manager.classInfo ? state.manager.classInfo[0].className : "" 
    }
}

const mapDispatchToProps={
    makeReport
}

export default connect(mapStateToProps,mapDispatchToProps) (Report)