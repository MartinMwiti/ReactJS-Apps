// FETCH PRODUCTS ACTION
import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE } from "./types";
import axios from "axios";

export const fetchProducts = () => (dispatch) => {
    // AJAX REQUEST
    axios.get("http://localhost:8000/products/").then((response) =>
    {
        return dispatch({
            type:FETCH_PRODUCTS, 
            payload: response.data
        })
    }  
    )}


export const filterProducts = (products, size) => (dispatch) => {
  return dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
        size:size,
        items: size === ''
        ? 
        products 
        : 
        products.filter(a=>a.availableSizes.indexOf(size.toUpperCase())>=0)
    }
  });
};