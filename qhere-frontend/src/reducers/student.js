import {
    CLASSES_STUDENT_PENDING,
    CLASSES_STUDENT_FULFILLED,
    JOIN_CLASS_PENDING,
    JOIN_CLASS_FULFILLED,
    GET_STUDENT_CLASSES_PENDING,
    GET_STUDENT_CLASSES_FULFILLED
} from '../actions/Student'

const initialState={
    isLoading: false,
    myClasses:[],
    classes:[],
    Error:{
        statusCode:"",
        statusText:""
    }
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
        default:
            return state;
        }
    }
        

