// Reducer will evaluate current state and an action and return a new state.

import { FETCH_PRODUCTS } from "../actions/types";

const initialState = { items:[] } // items of a products
export default function(state=initialState, action) {
    switch (action.type) {
      case FETCH_PRODUCTS:
        return { ...state, items: action.payload }; // the 'state' in the reducer will get the products from 'action.payload' & set them into 'items'.
      default:
        return state;
    }
}