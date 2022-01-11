import { cart } from '../reducers/cart';
import { combineReducers, createStore } from "redux";

export const store = createStore(
  combineReducers({
    cart
  })
)