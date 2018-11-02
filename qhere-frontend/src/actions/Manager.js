import axios from 'axios';

export const CREATE_CLASS="CREATE_CLASS"
export const CREATE_CLASS_ERROR="CREATE_CLASS_ERROR"

export const CLASSES="CLASSES"
export const CLASSES_ERROR="CLASSES_ERROR"

export const RESET_MANAGER="RESET_MANAGER"

export function createClass({managerName,className,joinTime,quota,discontinuity,description}){
    console.log(managerName+" "+className+" "+joinTime+" "+quota+" "+discontinuity+" "+description)
    return dispatch=>{
        axios.post('http://localhost:3000/manager/createClass',{managerName,className,joinTime,quota,discontinuity,description})
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

export function getClasses(){
    return dispatch=>{
        axios.get('http://localhost:3000/manager/getClasses')
        .then((data)=>{
            dispatch({
                type:CLASSES,
                payload:data.data.data
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export function reset(){
    return dispatch=>{
        dispatch({
            type:RESET_MANAGER,
            payload:""
        })
    }
}