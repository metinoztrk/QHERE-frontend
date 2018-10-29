import {TOKEN,TOKEN_ERROR,REGISTER,REGISTER_ERROR,FORGOT,FORGOT_ERROR,LOGOUT,LOGOUT_ERROR, RESET_PASSWORD, RESET_PASSWORD_ERROR} from '../actions/Users';

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
        case LOGOUT:
            return {
                ...state,
                userToken:"",
                isLogin:false,
            }
        case LOGOUT_ERROR:
            return {
                ...state,
                Error:{
                    statusCode:action.payload.status,
                    statusText:action.payload.statusText
                }  
            }
        case RESET_PASSWORD:
            return {
                ...state,
                Error:{
                    statusCode:action.payload,
                    statusText:"Başarılı"
                }  
            }
        case RESET_PASSWORD_ERROR:
            return {
                ...state,
                Error:{
                    statusCode:action.payload,
                    statusText:action.payload
                }  
            }
        
        default:
            return state;
    }
}