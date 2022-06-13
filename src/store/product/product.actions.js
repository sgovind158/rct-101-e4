// Product actions here

import axios from "axios"
import { GET_CART_ITEMS_SUCCESS } from "../cart/cart.types"
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS ,GET_PRODUCTS_LOADING} from "./product.types"


export const productDataApi = (data)=>(dispatch)=>{
   dispatch( {type:GET_PRODUCTS_LOADING,payload : data})
   
   axios.get("http://localhost:8080/products")
   .then((res)=>{
    console.log(res.data)

    dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})

   })

   dispatch({type:GET_PRODUCTS_ERROR})
}