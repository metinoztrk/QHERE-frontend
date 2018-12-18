import axios from 'axios';

export const CLASSES_STUDENT_PENDING="CLASSES_STUDENT_PENDING";
export const CLASSES_STUDENT_FULFILLED="CLASSES_STUDENT_FULFILLED";
export const CLASSES_STUDENT_REJECTED="CLASSES_STUDENT_REJECTED";

export const JOIN_CLASS_PENDING="JOIN_CLASS_PENDING";
export const JOIN_CLASS_FULFILLED="JOIN_CLASS_FULFILLED";
export const JOIN_CLASS_REJECTED="JOIN_CLASS_REJECTED";

export const GET_STUDENT_CLASSES_PENDING="GET_STUDENT_CLASSES_PENDING";
export const GET_STUDENT_CLASSES_FULFILLED="GET_STUDENT_CLASSES_FULFILLED";
export const GET_STUDENT_CLASSES_REJECTED="GET_STUDENT_CLASSES_REJECTED";

export const GET_DISCONTINUITY_PENDING="GET_DISCONTINUITY_PENDING";
export const GET_DISCONTINUITY_FULFILLED="GET_DISCONTINUITY_FULFILLED";
export const GET_DISCONTINUITY_REJECTED="GET_DISCONTINUITY_REJECTED";

export const GET_REQUEST_CLASSES_PENDING="GET_REQUEST_CLASSES_PENDING";
export const GET_REQUEST_CLASSES_FULFILLED="GET_REQUEST_CLASSES_FULFILLED";
export const GET_REQUEST_CLASSES_REJECTED="GET_REQUEST_CLASSES_REJECTED";

let URL="";

if(process.env.REACT_APP_SECRET_CODE === "development ")
{
    URL="http://localhost:3000"
}
else
{
    URL="http://yigitkurtcu.com"
}

export function classes(){
    return dispatch=>{
        dispatch({
            type:"CLASSES_STUDENT",
            payload:axios.get(`${URL}/student/getClasses`)
            .then((data)=>data.data.data)
        })  
    }
}

export function joinClass(id){
    return dispatch=>{
        dispatch({
            type:"JOIN_CLASS",
            payload:axios.post(`${URL}/student/${id}/joinClass`)
            .then((data)=>id)
        })
    }
}

export function getStudentClasses(){
    return dispatch=>{
        dispatch({
            type:"GET_STUDENT_CLASSES",
            payload:axios.get(`${URL}/student/getUserClasses`)
            .then(data=>data.data.data)
        })
    }
}

export function getDiscontinuity(id){
    return dispatch=>{
        dispatch({
            type:"GET_DISCONTINUITY",
            payload:axios.get(`${URL}/student/${id}/getDiscontinuity`)
            .then(data=>data.data.data)
        })
    }
}

export function getRequestClasses(){
    return dispatch=>{
        dispatch({
            type:"GET_REQUEST_CLASSES",
            payload:axios.get(`${URL}/student/getRequestClasses`)
            .then(data=>data.data.data)
        })
    }
}
