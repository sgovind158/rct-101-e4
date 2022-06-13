// Note: Do not update/change the initial state
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS ,GET_PRODUCTS_LOADING} from "./product.types"
const productInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (state = productInitalState, actions) => {
  const {type,payload} = actions;
  
  switch(type){
   case GET_PRODUCTS_LOADING:{
    return {
         ...state,
         loading:true,
         error: false
    }
   }

   case GET_PRODUCTS_SUCCESS:{
    return {
      ...state, 
      loding : false,
      error : false,
      date: [
          {payload}
      ]
    }
   }

   case GET_PRODUCTS_ERROR:{
    return {
      ...state,
      loading:false,
      error: true,
 }
   }
  }
 
  return state;
};
