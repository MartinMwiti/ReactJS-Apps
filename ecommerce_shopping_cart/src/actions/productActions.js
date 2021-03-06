// FETCH PRODUCTS ACTION
import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
} from "./types";
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

// FILTER PRODUCTS BY SIZE
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


// SORT PRODUCTS BY PRICE
export const sortProducts = (items, sort) => (dispatch) => {
  const products = items.slice(); // make a copy of the array since redux can't figure how to deal with updating and replacing items in an array. NB: This sort method will change the original array.
  if (sort !== "") {
    products.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  } else {
    products.sort((a, b) => (a.id > b.id ? 1 : -1));
  }

  return dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: products,
    },
  });
};