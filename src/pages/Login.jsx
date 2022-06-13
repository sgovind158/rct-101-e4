import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { authLoginData } from "../store/auth/auth.actions";

const Login = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const {isAuthenticated} = useSelector((state)=>state.authStore.data)
  const [loginUserDetail,setLoginUserDetail] = useState({
    email: "eve.holt@reqres.in",
    password: "123456"
  })
  
  const handleChangeData = (e)=>{
    const {name,value} = e.target
    setLoginUserDetail({
      ...loginUserDetail,
      [name]:value,
    })
  }

  const handleFormSubmit = (event)=>{
    event.preventDefault()
    dispatch(authLoginData(loginUserDetail))
  }

  useEffect(()=>{
   if(isAuthenticated ){
    console.log(isAuthenticated)
   
  
   }
  },[])
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input data-cy="login-email"
           name = "email" type="email" placeholder="enter your email" value={loginUserDetail.email} onChange={ handleChangeData} />
        <input data-cy="login-password" name = "password" type="password" placeholder="enter your password" value={loginUserDetail.password} onChange={ handleChangeData} />
        <button data-cy="login-submit" type="submit">Login </button>
      </form>
    </div>
  );
};

export default Login;
