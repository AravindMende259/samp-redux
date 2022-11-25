import fakestoreApi from "../../apis/fakestoreApi";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../constants/action-types";


export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const fetchProducts =  () => {
return async function(dispatch,getState){
const response=await fakestoreApi.get('/products')
dispatch( {
  type: ActionTypes.FETCH_PRODUCTS,
  payload: response.data,
})
}
 
};


export const fetchProduct =  (id) => {
  return async function(dispatch,getState){
  const response=await fakestoreApi.get(`/products/${id}`)
  dispatch( {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: response.data,
  })
  }
}




export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};