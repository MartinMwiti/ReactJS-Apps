// Reducer will evaluate current state and an action and return a new state.

import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE } from "../actions/types";

const initialState = { items: [], filteredItems: [], size: '' }; // items of a products
export default function(state=initialState, action) {
    switch (action.type) {

      case FETCH_PRODUCTS:
        return {
          ...state,
          items: action.payload,
          filteredItems: action.payload,
        }; // the 'state' in the reducer will get the products from 'action.payload' & set them into 'items'.

      case FILTER_PRODUCTS_BY_SIZE:
        return { ...state, filteredItems: action.payload.items, size:action.payload.size };

      default:
        return state;
    }
}