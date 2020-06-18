// FETCH PRODUCTS ACTION
import { FETCH_PRODUCTS } from "./types"
import axios from "axios";

export const fetchProducts = () => (dispatch) => {
    // AJAX REQUEST
    axios.get("http://localhost:8000/products/").then((response) =>
    {
        return dispatch({type:FETCH_PRODUCTS, payload: response.data})
    }  
    )}