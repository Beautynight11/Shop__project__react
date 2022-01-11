import { CART_ADD_TO_LIST, CART_DECREASE_QUANTITY, CART_DELETE_FROM_LIST } from "../constants/actionTypes";

export const addToCartAction = (item) => ({
  type: CART_ADD_TO_LIST,
  payload: item
})

export const removeFromCart = (item) => ({
  type: CART_DELETE_FROM_LIST,
  payload: item
})

export const decreaseQuantityCart = (item) => ({
  type: CART_DECREASE_QUANTITY,
  payload: item
})