import {CREATE_CLASS,
        CREATE_CLASS_ERROR,
        RESET_MANAGER,
        CLASSES,
        CLASSES_ERROR,
        GET_CLASSES_REQUEST,
        GET_CLASSES_REQUEST_ERROR,
        APPROVE_STUDENT,
        APPROVE_STUDENT_ERROR,
        REJECT_STUDENT,
        REJECT_STUDENT_ERROR,
        EDIT_CLASS,
        EDIT_CLASS_ERROR,
        DELETE_CLASS,
        DELETE_CLASS_ERROR,
        CREATE_QR,
        CREATE_QR_ERROR
    } from '../actions/Manager'

const initialState={
    lastQrId:"",
    createClass:"",
    classes:[],
    Error:{
        statusCode:"",
        statusText:""
    },
    requestStudents:[]
}

export default (state=initialState,action)=>{
    switch(action.type){
        case CREATE_CLASS:
            return{
                ...state,
                createClass:action.payload
            }
        case CREATE_CLASS_ERROR:
            return{
                ...state,
                Error:{
                    statusCode:action.payload.status,
                    statusText:action.payload.statusText
                }  
            }
        case CLASSES:
            return{
                ...state,
                classes:action.payload
            }
        case CLASSES_ERROR:
            return{
                ...state,
                Error:{
                    statusCode:action.payload.status,
                    statusText:action.payload.statusText
                }  
            }
        case GET_CLASSES_REQUEST:
            return{
                ...state,
                requestStudents:action.payload
            }
        case GET_CLASSES_REQUEST_ERROR:
            return{
                ...state,
                Error:{
                    statusCode:action.payload.status,
                    statusText:action.payload.statusText
                }  
            }
        case APPROVE_STUDENT:
            return{
                ...state,
                requestStudents:state.requestStudents.filter(item=>item._id!==action.payload)
            }
        case APPROVE_STUDENT_ERROR:
            console.log(action.payload[1])
            if(action.payload[1]===406){

                return{
                    ...state,
                    requestStudents:state.requestStudents.filter(item=>item._id!==action.payload[0])
                }  
            }else{
                return{
                    ...state,
                    Error:{
                        statusCode:action.payload.status,
                        statusText:action.payload.statusText
                    }  
                }  
            }   
        case REJECT_STUDENT:
            return{
                ...state,
                requestStudents:state.requestStudents.filter(item=>item._id!==action.payload)
            }
        case REJECT_STUDENT_ERROR:
            return{
                ...state,
                Error:{
                    statusCode:action.payload.status,
                    statusText:action.payload.statusText
                }  
            }
        case EDIT_CLASS:
            return{
                ...state
            }
        case EDIT_CLASS_ERROR:
            return{
                ...state,
                Error:{
                    statusCode:action.payload.status,
                    statusText:action.payload.statusText
                }  
            }
        case DELETE_CLASS:
            return{
                ...state
            }
        case DELETE_CLASS_ERROR:
            return{
                ...state,
                Error:{
                    statusCode:action.payload.status,
                    statusText:action.payload.statusText
                }  
            }
        case CREATE_QR:
            return{
                ...state,
                lastQrId:action.payload
            }
        case CREATE_QR_ERROR:
            return{
                ...state,
                Error:{
                    statusCode:action.payload.status,
                    statusText:action.payload.statusText
                }  
            }
        case RESET_MANAGER:
            return{
                ...state,
                createClass:""
            }
        default:
            return state;
    }
}