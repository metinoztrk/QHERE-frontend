import {TOKEN,TOKEN_ERROR,REGISTER,REGISTER_ERROR,FORGOT,FORGOT_ERROR} from '../actions/Users';

const initialState={
    userToken:"",
    isLogin:false,
    Error:{
        statusCode:"",
        statusText:""
    }
}

export default (state=initialState,action)=>{
    switch (action.type){
        case TOKEN:
            return {
                ...state,
                userToken:action.payload,
                isLogin:true       
            }
        case TOKEN_ERROR:
            return {
                ...state,
                Error:{
                    statusCode:action.payload.status,
                    statusText:action.payload.statusText
                }  
            }
        case REGISTER:
            return {
                ...state,
                Error:{
                    statusCode:action.payload.status,
                    statusText:action.payload.statusText
                }  
            }
        case REGISTER_ERROR:
            return {
                ...state,
                Error:{
                    statusCode:action.payload.status,
                    statusText:action.payload.statusText
                }  
            }
        case FORGOT:
            return {
                ...state,
                Error:{
                    statusCode:action.payload.status,
                    statusText:action.payload.statusText
                }  
            }
        case FORGOT_ERROR:
            return {
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