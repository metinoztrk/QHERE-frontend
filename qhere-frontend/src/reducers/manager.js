import {CREATE_CLASS,CREATE_CLASS_ERROR,RESET_MANAGER,CLASSES,CLASSES_ERROR,GET_CLASSES_REQUEST,GET_CLASSES_REQUEST_ERROR} from '../actions/Manager'

const initialState={
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
        case RESET_MANAGER:
            return{
                ...state,
                createClass:""
            }
        default:
            return state;
    }
}