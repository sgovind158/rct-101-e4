import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDataApi } from "../store/product/product.actions";

const Home = () => {
  const {data} = useSelector((state)=>state.productStore )
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(productDataApi())

  },[data])
 

  
};

export default Home;
