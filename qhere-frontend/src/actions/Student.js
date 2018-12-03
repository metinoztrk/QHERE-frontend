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

export function classes(){
    return dispatch=>{
        dispatch({
            type:"CLASSES_STUDENT",
            payload:axios.get('http://localhost:3000/student/getClasses')
            .then((data)=>data.data.data)
        })  
    }
}

export function joinClass(id){
    return dispatch=>{
        dispatch({
            type:"JOIN_CLASS",
            payload:axios.post(`http://localhost:3000/student/${id}/joinClass`)
            .then((data)=>id)
        })
    }
}

export function getStudentClasses(){
    return dispatch=>{
        dispatch({
            type:"GET_STUDENT_CLASSES",
            payload:axios.get('http://localhost:3000/student/getUserClasses')
            .then(data=>data.data.data)
        })
    }
}

export function getDiscontinuity(id){
    return dispatch=>{
        dispatch({
            type:"GET_DISCONTINUITY",
            payload:axios.get(`http://localhost:3000/student/${id}/getDiscontinuity`)
            .then(data=>data.data.data)
        })
    }
}
