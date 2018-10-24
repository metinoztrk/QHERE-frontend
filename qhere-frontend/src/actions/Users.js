import axios from 'axios';
import setAuthorizationToken  from '../setAuthorizationToken';
export const TOKEN="TOKEN"
export const TOKEN_ERROR="TOKEN_ERROR"
export const REGISTER="REGISTER"
export const REGISTER_ERROR="REGISTER_ERROR"
export const FORGOT="FORGOT"
export const FORGOT_ERROR="FORGOT_ERROR"


export function login({email,password}) {
    console.log(email,password);
    return dispatch=>{  
        let tokenCopy
        axios.post('http://localhost:8000/user/login',{email,password})
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
        axios.post('http://localhost:8000/user/register',{schoolNumber,fullName,email,password,gender})
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

export function forgot({email}){
    console.log(email)

    return dispatch=>{
        axios.post('http://localhost:8000/user/forgot',{email})
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