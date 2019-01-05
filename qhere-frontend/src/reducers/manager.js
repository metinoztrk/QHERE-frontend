import {CREATE_CLASS_PENDING,
    CREATE_CLASS_FULFILLED,
    CREATE_CLASS_REJECTED,

    RESET_MANAGER,

    CLASS_INFO_PENDING,
    CLASS_INFO_FULFILLED,
    CLASS_INFO_REJECTED,

    CLASSES_PENDING,
    CLASSES_FULFILLED,
    CLASSES_REJECTED,

    GET_CLASSES_REQUEST_PENDING,
    GET_CLASSES_REQUEST_FULFILLED,
    GET_CLASSES_REQUEST_REJECTED,

    APPROVE_STUDENT_PENDING,
    APPROVE_STUDENT_FULFILLED,
    APPROVE_STUDENT_REJECTED,

    REJECT_STUDENT_PENDING,
    REJECT_STUDENT_FULFILLED,
    REJECT_STUDENT_REJECTED,

    EDIT_CLASS_PENDING,
    EDIT_CLASS_FULFILLED,
    EDIT_CLASS_REJECTED,

    DELETE_CLASS_PENDING,
    DELETE_CLASS_FULFILLED,
    DELETE_CLASS_REJECTED,

    CREATE_QR_PENDING,
    CREATE_QR_FULFILLED,
    CREATE_QR_REJECTED,

    GET_QR_INFO_PENDING,
    GET_QR_INFO_FULFILLED,
    GET_QR_INFO_REJECTED,

    SEND_NOTIFICATION_PENDING,
    SEND_NOTIFICATION_FULFILLED,
    SEND_NOTIFICATION_REJECTED,

    MAKE_REPORT_PENDING,
    MAKE_REPORT_FULFILLED,
    MAKE_REPORT_REJECTED,

    FINISH_QHERE_PENDING,
    FINISH_QHERE_FULFILLED,
    FINISH_QHERE_REJECTED


} from '../actions/Manager'

const initialState={
qrInfoLoading:false,
isLoading: false,
lastQrId:"",
createClass:"",
classInfo:"",
classes:[],
makeReport:[],
Error:{
    statusCode:"",
    statusText:""
},
qrInfo:"",
requestStudents:[]
}

export default (state=initialState,action)=>{
switch(action.type){
    case CREATE_CLASS_PENDING:
        return{
            ...state,
            isLoading:true
        }
    case CREATE_CLASS_FULFILLED:
        return{
            ...state,
            isLoading:false,
            createClass:action.payload
        }
    case CREATE_CLASS_REJECTED:
        return{
            ...state,
            Error:{
                statusCode:action.payload.status,
                statusText:action.payload.statusText
            }  
        }
    case CLASS_INFO_PENDING:
        return{
            ...state,
            isLoading:true,
        }
    case CLASS_INFO_FULFILLED:
        return{
            ...state,
            isLoading:false,
            classInfo:action.payload
        }
    case CLASS_INFO_REJECTED:
        return{
            ...state,
            Error:{
                statusCode:action.payload.status,
                statusText:action.payload.statusText
            }  
        }
    case CLASSES_PENDING:
        return{
            ...state,
            isLoading:true,
        }
    case CLASSES_FULFILLED:
        return{
            ...state,
            isLoading:false,
            classes:action.payload
        }
    case CLASSES_REJECTED:
        return{
            ...state,
            Error:{
                statusCode:action.payload.status,
                statusText:action.payload.statusText
            }  
        }
    case GET_CLASSES_REQUEST_PENDING:
        return{
            ...state,
            isLoading:true
        }
    case GET_CLASSES_REQUEST_FULFILLED:
        return{
            ...state,
            isLoading:false,
            requestStudents:action.payload
        }
    case GET_CLASSES_REQUEST_REJECTED:
        return{
            ...state,
            Error:{
                statusCode:action.payload.status,
                statusText:action.payload.statusText
            }  
        }
    case APPROVE_STUDENT_PENDING:
        return{
            ...state,
            isLoading:true
        }
    case APPROVE_STUDENT_FULFILLED:
        return{
            ...state,
            isLoading:false,
            requestStudents:state.requestStudents.filter(item=>item._id!==action.payload)
        }
    case APPROVE_STUDENT_REJECTED:
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
    case REJECT_STUDENT_PENDING:
        return{
            ...state,
            isLoading:true
        }
    case REJECT_STUDENT_FULFILLED:
        return{
            ...state,
            isLoading:false,
            requestStudents:state.requestStudents.filter(item=>item._id!==action.payload)
        }
    case REJECT_STUDENT_REJECTED:
        return{
            ...state,
            Error:{
                statusCode:action.payload.status,
                statusText:action.payload.statusText
            }  
        }
    case EDIT_CLASS_PENDING:
        return{
            ...state,
            isLoading:true
        }
    case EDIT_CLASS_FULFILLED:
        return{
            ...state,
            isLoading:false,
            Error:{
                statusCode:action.payload,
                statusText:"Ok"
            }  
        }
    case EDIT_CLASS_REJECTED:
        return{
            ...state,
            Error:{
                statusCode:action.payload.status,
                statusText:action.payload.statusText
            }  
        }
    case DELETE_CLASS_PENDING:
        return{
            ...state,
            isLoading:true
        }
    case DELETE_CLASS_FULFILLED:
        return{
            ...state,
            isLoading:true
        }
    case DELETE_CLASS_REJECTED:
        return{
            ...state,
            Error:{
                statusCode:action.payload.status,
                statusText:action.payload.statusText
            }  
        }
    case CREATE_QR_PENDING:
        return{
            ...state,
            isLoading:true
        }
    case CREATE_QR_FULFILLED:
        localStorage.setItem('lastQrId',action.payload)
        return{
            ...state,
            isLoading:false,
            lastQrId:action.payload
        }
    case CREATE_QR_REJECTED:
        return{
            ...state,
            Error:{
                statusCode:action.payload.status,
                statusText:action.payload.statusText
            }  
        }
    case GET_QR_INFO_PENDING:
        return{
            ...state,
            isLoading:true
        }
    case GET_QR_INFO_FULFILLED:
        return{
            ...state,
            isLoading:false,
            qrInfo:action.payload  
        }
    case GET_QR_INFO_REJECTED:
        return{
            ...state,
            Error:{
                statusCode:action.payload.status,
                statusText:action.payload.statusText
            }  
        }
    case SEND_NOTIFICATION_PENDING:
        return{
            ...state,
            isLoading:true,
        }
    case SEND_NOTIFICATION_FULFILLED:
        return{
            ...state,
            isLoading:false,
            Error:{
                statusCode:action.payload,
                statusText:""
            }  
        }
    case SEND_NOTIFICATION_REJECTED:
        return{
            ...state,
            Error:{
                statusCode:action.payload.status,
                statusText:action.payload.statusText
            }  
        }
    case MAKE_REPORT_PENDING:
        return{
            ...state,
            isLoading:true,
        }
    case MAKE_REPORT_FULFILLED:
        return{
            ...state,
            isLoading:false,
            makeReport:action.payload
        }
    case MAKE_REPORT_REJECTED:
        return{
            ...state, 
        }
    case FINISH_QHERE_PENDING:
        return{
            ...state,
            isLoading:true,
        }
    case FINISH_QHERE_FULFILLED:
        return{
            ...state,
            isLoading:false,
            Error:{
                statusCode:action.payload,
                statusText:"Ok"
            }
        }
    case FINISH_QHERE_REJECTED:
        return{
            ...state, 
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