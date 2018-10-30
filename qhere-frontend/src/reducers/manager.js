import {CREATE_CLASS,CREATE_CLASS_ERROR} from '../actions/Manager'

const initialState={
    createClass:"",
    Error:{
        statusCode:"",
        statusText:""
    }
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
        default:
            return state;
    }
}