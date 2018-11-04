import axios from 'axios';
import setAuthorizationToken  from '../setAuthorizationToken';

export const TOKEN="TOKEN"
export const TOKEN_ERROR="TOKEN_ERROR"

export const REGISTER="REGISTER"
export const REGISTER_ERROR="REGISTER_ERROR"

export const FORGOT="FORGOT"
export const FORGOT_ERROR="FORGOT_ERROR"

export const LOGOUT="LOGOUT"
export const LOGOUT_ERROR="LOGOUT_ERROR"

export const RESET_PASSWORD="RESET_PASSWORD"
export const RESET_PASSWORD_ERROR="RESET_PASSWORD_ERROR"

export const RESET_USER="RESET_USER"


export function login({email,password}) {
    console.log(email,password);
    return dispatch=>{  
        let tokenCopy
        axios.post('http://localhost:3000/user/login',{email,password})
            .then(token=>token.data.data.token.accessToken)       
            .then(token=>{
                tokenCopy=token;
                localStorage.setItem('token',tokenCopy);
                setAuthorizationToken(token);
                dispatch({
                    type:TOKEN,
                    payload:tokenCopy,
                })
            }).catch((err)=>{
                dispatch({
                    type:TOKEN_ERROR,
                    payload:err.response
                })
            })
    }
}

export function register({schoolNumber,fullName,email,password,gender}){
    console.log(schoolNumber+" "+fullName+" "+email+" "+password+" "+gender)
    return dispatch=>{
        axios.post('http://localhost:3000/user/register',{schoolNumber,fullName,email,password,gender})
            .then(data=>{
                dispatch({
                    type:REGISTER,
                    payload:data
                })
            }).catch(err=>{
                dispatch({
                    type:REGISTER_ERROR,
                    payload:err.response
                })
            })
    }
}

export function logout(){
    return dispatch=>{
        axios.post('http://localhost:3000/user/logout')
        .then(data=>{
            dispatch({
                type:LOGOUT,
                payload:""
            })
        }).catch((err)=>{  
            console.log(err.response)
            dispatch({
                type:LOGOUT_ERROR,
                payload:err.response
            })
        })
        localStorage.removeItem('token');
    }
}

export function forgot({email}){
    console.log(email)

    return dispatch=>{
        axios.post('http://localhost:3000/user/forgot',{email})
        .then(data=>{
            dispatch({
                type:FORGOT,
                payload:data
            })
        }).catch(err=>{
            dispatch({
                type:FORGOT_ERROR,
                payload:err.response
            })
        })
    }
}

export function resetPassword({code,newPassword}){
    console.log(code+" "+newPassword)
    return dispatch=>{
        axios.post('http://localhost:3000/user/resetPassword',{code,newPassword})
        .then(data=>{
            dispatch({
                type:RESET_PASSWORD,
                payload:data.data.status_code
            })
        }).catch(err=>{
            dispatch({
                type:RESET_PASSWORD,
                payload:err.response
            })
        })
    }
}

export function reload(){
    let token=localStorage.getItem('token')
    setAuthorizationToken(token)
    return dispatch=>{
        dispatch({
            type:TOKEN,
            payload:token,
        })
    }
}

export function reset(){
    return dispatch=>{
        dispatch({
            type:RESET_USER,
            payload:""
        })
    }
}