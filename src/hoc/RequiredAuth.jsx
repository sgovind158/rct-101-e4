import { useSelector } from "react-redux";
import { Navigate ,useNavigate} from "react-router-dom";




const RequiredAuth = ({ children }) => {
  const {isAuthenticated} = useSelector((state)=>state.authStore.data)
let navigate = useNavigate()
 if(isAuthenticated ){
  navigate("/")
  
 }
  return children;
};

export default RequiredAuth;
