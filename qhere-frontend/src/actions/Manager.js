import axios from 'axios';

export const CREATE_CLASS="CREATE_CLASS"
export const CREATE_CLASS_ERROR="CREATE_CLASS_ERROR"

export const CLASSES="CLASSES"
export const CLASSES_ERROR="CLASSES_ERROR"

export const GET_CLASSES_REQUEST="GET_CLASSES_REQUEST"
export const GET_CLASSES_REQUEST_ERROR="GET_CLASSES_REQUEST_ERROR"

export const APPROVE_STUDENT="APPROVE_STUDENT"
export const APPROVE_STUDENT_ERROR="APPROVE_STUDENT_ERROR"

export const REJECT_STUDENT="REJECT_STUDENT"
export const REJECT_STUDENT_ERROR="REJECT_STUDENT_ERROR"

export const EDIT_CLASS="EDIT_CLASS"
export const EDIT_CLASS_ERROR="EDIT_CLASS_ERROR"

export const DELETE_CLASS="DELETE_CLASS"
export const DELETE_CLASS_ERROR="DELETE_CLASS_ERROR"

export const RESET_MANAGER="RESET_MANAGER"

export function createClass({_id,managerName,className,lastJoinTime,quota,discontinuity,description}){
    console.log(_id+" "+managerName+" "+className+" "+lastJoinTime+" "+quota+" "+discontinuity+" "+description)
    return dispatch=>{
        axios.post('http://localhost:3000/manager/createClass',{_id,managerName,className,lastJoinTime,quota,discontinuity,description})
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

export function getClassesRequest(){
    return dispatch=>{
        axios.get('http://localhost:3000/manager/getClassesRequest')
        .then((data)=>{
            dispatch({
                type:GET_CLASSES_REQUEST,
                payload:data.data.data
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export function approveStudent(id){
    let message=[]
    message.push(id)
    return dispatch=>{
        axios.put(`http://localhost:3000/manager/${id}/approveStudent`)
        .then((data)=>{
            dispatch({
                type:APPROVE_STUDENT,
                payload:id
            })
        }).catch((err)=>{
            if(err.response.data.error.status_code)
            {
                message.push(err.response.data.error.status_code)
                dispatch({
                    type:APPROVE_STUDENT_ERROR,
                    payload:message
                })
            }else{
                dispatch({
                    type:APPROVE_STUDENT_ERROR,
                    payload:err.response
                })
            }
        })
    }
}

export function rejectStudent(id){
    return dispatch=>{
        axios.get(`http://localhost:3000/manager/${id}/rejectStudent`)
        .then((data)=>{
            dispatch({
                type:REJECT_STUDENT,
                payload:id
            })
        }).catch((err)=>{
            dispatch({
                type:REJECT_STUDENT_ERROR,
                payload:err.response
            })
        })
    }
}

export function editClass(id){
    return dispatch=>{
        axios.put(`http://localhost:3000/manager/${id}/editClass`)
        .then((data)=>{
            dispatch({
                type:EDIT_CLASS,
                payload:data.data
            })
        }).catch((err)=>{
            dispatch({
                type:EDIT_CLASS_ERROR,
                payload:err.response
            })
        })
    }
}

export function deleteClass(id){
    return dispatch=>{
        axios.delete(`http://localhost:3000/manager/${id}/deleteClass`)
        .then((data)=>{
            dispatch({
                type:DELETE_CLASS,
                payload:data.data
            })
        }).catch((err)=>{
            dispatch({
                type:DELETE_CLASS_ERROR,
                payload:err.response
            })
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