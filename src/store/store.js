// TODO: use this store variable to create a store.
import {legacy_createStore, applyMiddleware,composs, combineReducers} from "redux"
import  thunk from "redux-thunk"
import {authReducer}  from "../store/auth/auth.reducer"
import { productReducer } from "./product/product.reducer";


const rootReducer = combineReducers({
   authStore : authReducer,
   productStore: productReducer ,
})



export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
 ;

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
