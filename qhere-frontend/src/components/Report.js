import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Bar} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import {makeReport} from '../actions/Manager';

class Report extends Component{

    constructor(props) {
        super(props);

        this.state = { 
            id:""
        };
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
                label: this.props.className,
                data:obj ,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
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
            <div style={style.div}>
            <Bar
	         data={data}
	         width={100}
	         height={50}
	         options={options}
             />
             </div>
        )
    }
}

const style={
    div:{
        width:600,
        height:600,
        
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