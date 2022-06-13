import React from "react";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { authLogoutData } from "../../store/auth/auth.actions";


const Navbar = () => {
  const dispatch  = useDispatch()
  const {isAuthenticated} = useSelector((state)=>state.authStore.data)
  const loginLogoutFun = ()=>{
    dispatch(authLogoutData())
  }
  return (
    <div data-cy="navbar">navbar
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link data-cy="navbar-home-link" to="/">Home</Link>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">cart coutnt</div>
        <button data-cy="navbar-login-logout-button" onClick={()=>loginLogoutFun} >{isAuthenticated? "login":"Logout"}</button>
      </div>
    </div>
  );
};

export default Navbar;
