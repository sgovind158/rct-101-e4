// Auth Actions here
import {AUTH_SIGN_IN_LOADING,AUTH_SIGN_IN_SUCCESS,AUTH_SIGN_IN_ERROR,AUTH_SIGN_OUT} from "./auth.types"
import axios from "axios"
// eve.holt@reqres.in
export const authLoginData = (userData)=>(dispatch)=>{
    dispatch({type:AUTH_SIGN_IN_LOADING})
    axios.post(`https://reqres.in/api/login`,{
        email: userData.email,
        password: userData.password
    }).then((res)=>{
         dispatch({type:AUTH_SIGN_IN_SUCCESS,payload : res.data})
    }).catch((err)=>{
        dispatch({type:AUTH_SIGN_IN_ERROR  })
    })
}

export const authLogoutData = ()=> ({type:AUTH_SIGN_OUT })