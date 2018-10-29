import axios from 'axios';

export default function setAuthorizationToken(token){
    if(token){  
        console.log(token===true);
        axios.defaults.headers.common['authorization']=token;
    }else{
        delete axios.defaults.headers.common['authorization'];
    }

}