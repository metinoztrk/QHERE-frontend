import axios from 'axios';

export const CREATE_CLASS="CREATE_CLASS"
export const CREATE_CLASS_ERROR="CREATE_CLASS_ERROR"

export function createClass({managerName,className,joinTime,quota,discontinuity,description}){
    console.log(managerName+" "+className+" "+joinTime+" "+quota+" "+discontinuity+" "+description)
    return dispatch=>{
        axios.post('http://localhost:8000/manager/createClass',{managerName,className,joinTime,quota,discontinuity,description})
        .then((data)=>{
            dispatch({
                type:CREATE_CLASS,
                payload:data.data.status_code
            })
        }).catch((err)=>{
            dispatch({
                type:CREATE_CLASS_ERROR,
                payload:err.response
            })
        })
    }
}