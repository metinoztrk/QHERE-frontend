import {
    CLASSES_STUDENT_PENDING,
    CLASSES_STUDENT_FULFILLED,
    JOIN_CLASS_PENDING,
    JOIN_CLASS_FULFILLED,
    GET_STUDENT_CLASSES_PENDING,
    GET_STUDENT_CLASSES_FULFILLED,
    GET_REQUEST_CLASSES_PENDING,
    GET_REQUEST_CLASSES_FULFILLED,
    GET_DISCONTINUITY_PENDING,
    GET_DISCONTINUITY_FULFILLED,
    GET_NOTIFICATION_PENDING,
    GET_NOTIFICATION_FULFILLED,
    READ_NOTIFICATION_PENDING,
    READ_NOTIFICATION_FULFILLED
    
} from '../actions/Student'

const initialState={
    isNotification:false,
    isLoading: false,
    myClasses:[],
    requestClasses:[],
    classes:[],
    Error:{
        statusCode:"",
        statusText:""
    },
    weeks:{
        qhereCount:"",
        roolCall:"",
        weeksInfo:[]
    },
    notification:[]

}
export default (state=initialState,action)=>{
    switch(action.type){
        case CLASSES_STUDENT_PENDING:
            return{
                ...state,
                isLoading:true
            }
        case CLASSES_STUDENT_FULFILLED:
            return{
                ...state,
                isLoading:false,
                classes:action.payload
            }
        case JOIN_CLASS_PENDING:
            return{
                ...state,
                isLoading:true
            }
        case JOIN_CLASS_FULFILLED:
            return{
                ...state,
                isLoading:false,
                classes:state.classes.filter(item=>item._id!==action.payload)
            }
        case GET_STUDENT_CLASSES_PENDING:
            return{
                ...state,
                isLoading:true
            }
        case GET_STUDENT_CLASSES_FULFILLED:
            return{
                ...state,
                isLoading:false,
                myClasses:action.payload
            }
        case GET_REQUEST_CLASSES_PENDING:
            return{
                ...state,
                isLoading:true
            }
        case GET_REQUEST_CLASSES_FULFILLED:
            return{
                ...state,
                isLoading:false,
                requestClasses:action.payload
            }
        case GET_DISCONTINUITY_PENDING:
            return{
                ...state,
                isLoading:true
            }
        case GET_DISCONTINUITY_FULFILLED:
            return{
                ...state,
                isLoading:false,
                weeks:action.payload
            }
        case GET_NOTIFICATION_PENDING:
            return{
                ...state,
                isLoading:true
            }
        case GET_NOTIFICATION_FULFILLED:
            return{
                ...state,
                isLoading:false,
                notification:action.payload
            }
        case READ_NOTIFICATION_PENDING:
            return{
                ...state,
                isLoading:true
            }
        case READ_NOTIFICATION_FULFILLED:
            console.log(action.payload);
            return{
                ...state,
                isLoading:false,
                notification:state.notification.filter(item=>item._id!==action.payload._id)
            }
        default:
            return state;
        }
    }
        

