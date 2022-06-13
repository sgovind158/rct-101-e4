// Note: Do not update/change the initial state
import {AUTH_SIGN_IN_LOADING,AUTH_SIGN_IN_SUCCESS,AUTH_SIGN_IN_ERROR,AUTH_SIGN_OUT} from "./auth.types"

export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState,actions) => {
  const {type ,payload} = actions

  switch(type){
    case AUTH_SIGN_IN_LOADING:{
      return {...state , loading: true , error: false}
    }

    case AUTH_SIGN_IN_SUCCESS:{
      console.log(payload.token)
      localStorage.setItem("tokenKey",payload.token)
       return {
        ...state,
        loading: false,
        error:false,
        userAuth : true,
        tokon : payload.token
       }
    }

    case AUTH_SIGN_IN_ERROR:{
      return {...state , loading: false , error: true}
    }

   case AUTH_SIGN_OUT:{
    localStorage.removeItem("tokenKey")
    return {...state,userAuth:false , tokon : ""}
   }
  default:{
    return state;
  }
  }

 
 
};
