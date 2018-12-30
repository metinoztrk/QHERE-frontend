import axios from 'axios';

export const CREATE_CLASS_PENDING="CREATE_CLASS_PENDING";
export const CREATE_CLASS_FULFILLED="CREATE_CLASS_FULFILLED";
export const CREATE_CLASS_REJECTED="CREATE_CLASS_REJECTED";

export const RESET_MANAGER="RESET_MANAGER"

export const CLASS_INFO_PENDING="CLASS_INFO_PENDING";
export const CLASS_INFO_FULFILLED="CLASS_INFO_FULFILLED";
export const CLASS_INFO_REJECTED="CLASS_INFO_REJECTED";

export const CLASSES_PENDING="CLASSES_PENDING";
export const CLASSES_FULFILLED="CLASSES_FULFILLED";
export const CLASSES_REJECTED="CLASSES_REJECTED";

export const GET_CLASSES_REQUEST_PENDING="GET_CLASSES_REQUEST_PENDING";
export const GET_CLASSES_REQUEST_FULFILLED="GET_CLASSES_REQUEST_FULFILLED";
export const GET_CLASSES_REQUEST_REJECTED="GET_CLASSES_REQUEST_REJECTED";

export const APPROVE_STUDENT_PENDING="APPROVE_STUDENT_PENDING";
export const APPROVE_STUDENT_FULFILLED="APPROVE_STUDENT_FULFILLED";
export const APPROVE_STUDENT_REJECTED="APPROVE_STUDENT_REJECTED";

export const REJECT_STUDENT_PENDING="REJECT_STUDENT_PENDING";
export const REJECT_STUDENT_FULFILLED="REJECT_STUDENT_FULFILLED";
export const REJECT_STUDENT_REJECTED="REJECT_STUDENT_REJECTED";

export const EDIT_CLASS_PENDING="EDIT_CLASS_PENDING";
export const EDIT_CLASS_FULFILLED="EDIT_CLASS_FULFILLED";
export const EDIT_CLASS_REJECTED="EDIT_CLASS_REJECTED";

export const DELETE_CLASS_PENDING="DELETE_CLASS_PENDING";
export const DELETE_CLASS_FULFILLED="DELETE_CLASS_FULFILLED";
export const DELETE_CLASS_REJECTED="DELETE_CLASS_REJECTED";

export const CREATE_QR_PENDING="CREATE_QR_PENDING";
export const CREATE_QR_FULFILLED="CREATE_QR_FULFILLED";
export const CREATE_QR_REJECTED="CREATE_QR_REJECTED";

export const GET_QR_INFO_PENDING="GET_QR_INFO_PENDING";
export const GET_QR_INFO_FULFILLED="GET_QR_INFO_FULFILLED";
export const GET_QR_INFO_REJECTED="GET_QR_INFO_REJECTED";

export const SEND_NOTIFICATION_PENDING="SEND_NOTIFICATION_PENDING";
export const SEND_NOTIFICATION_FULFILLED="SEND_NOTIFICATION_FULFILLED";
export const SEND_NOTIFICATION_REJECTED="SEND_NOTIFICATION_REJECTED";

export const MAKE_REPORT_PENDING="MAKE_REPORT_PENDING";
export const MAKE_REPORT_FULFILLED="MAKE_REPORT_FULFILLED";
export const MAKE_REPORT_REJECTED="MAKE_REPORT_REJECTED";


let URL="";

if(process.env.REACT_APP_SECRET_CODE === "development ")
{
    URL="http://localhost:3000"
}
else
{
    URL="http://yigitkurtcu.com"
}

export function createClass({className,lastJoinTime,quota,discontinuity,description}){
    return dispatch=>{

        dispatch({
            type:"CREATE_CLASS",
            payload:axios.post(`${URL}/manager/createClass`,{className,lastJoinTime,quota,discontinuity,description})
            .then((data)=>data.data.status_code)
        })
        
    }
}

export function getClassInfo(id) { 
    return dispatch=>{
        dispatch({
            type:"CLASS_INFO",
            payload:axios.get(`${URL}/manager/class/${id}/info`)
            .then((data)=>data.data.data)
        })
    }
 }

export function getClasses(){
    return dispatch=>{

        dispatch({
            type:"CLASSES",
            payload:axios.get(`${URL}/manager/getClasses`)
            .then((data)=>data.data.data)
        })

    }
}

export function getClassesRequest(){
    return dispatch=>{

        dispatch({
            type:"GET_CLASSES_REQUEST",
            payload:axios.get(`${URL}/manager/getClassesRequest`)
            .then((data)=>data.data.data)
            })

    }
}

export function approveStudent(id){
    return dispatch=>{

            dispatch({
                type:"APPROVE_STUDENT",
                payload:axios.put(`${URL}/manager/${id}/approveStudent`)
                .then((data)=>id)
            })
    }
}

export function rejectStudent(id){
    return dispatch=>{

        dispatch({
            type:"REJECT_STUDENT",
            payload:axios.post(`${URL}/manager/${id}/rejectStudent`)
            .then((data)=>id)
        })
    }
}

export function editClass({classId,className,lastJoinTime,quota,discontinuity,description}){
    return dispatch=>{
        dispatch({
            type:"EDIT_CLASS",
            payload:axios.put(`${URL}/manager/${classId}/updateClass`,{className,lastJoinTime,quota,discontinuity,description})
            .then(data=>data.data.statusCode)
        })
    }
}

export function deleteClass(id){
    return dispatch=>{

        dispatch({
            type:"DELETE_CLASS",
            payload:axios.delete(`${URL}/manager/${id}/deleteClass`)
            .then((data)=>data.data)
        })
    }
}

export function createQr(classId){
    return dispatch=>{
        
        dispatch({
            type:"CREATE_QR",
            payload:axios.put(`${URL}/manager/createQr`,{classId})
            .then((data)=>data.data.data.qheres[data.data.data.qheres.length-1]._id)
        })
    }
}

export function getQrInfo(qrId){
    return dispatch=>{
        
        dispatch({
            type:"GET_QR_INFO",
            payload:axios.get(`${URL}/manager/getQrInfo/${qrId}`)
            .then((data)=>data.data.data)
        })
    }
}

export function sendNotification({id,title,content,className}){
    return dispatch=>{

        dispatch({
            type:"SEND_NOTIFICATION",
            payload:axios.post(`${URL}/manager/sendNotification`,{id,title,content,className})
            .then((data)=>data.data.status_code)
        })
    }
}

export function makeReport(id){
    return dispatch=>{
        dispatch({
            type:"MAKE_REPORT",
            payload:axios.get(`${URL}/manager/makeReport/${id}`)
            .then((data)=>data.data.data)
        })
    }
}

export function reloadManager(){
    let QrId=localStorage.getItem('lastQrId')
    if(QrId !== null)
    {
        return dispatch=>{
            dispatch({
                type:CREATE_QR_FULFILLED,
                payload:QrId,
            })
        }  
    }else {
        return () => {}
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