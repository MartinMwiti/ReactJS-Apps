// FETCH PRODUCTS ACTION
import { FETCH_PRODUCTS } from "./types"
import axios from "axios";

export const fetch_products = () => (dispatch) => {
    axios.get("http://localhost:8000/products/").then((response) =>
    {
        return {type:FETCH_PRODUCTS, payload: response.data}
    }  
    )}