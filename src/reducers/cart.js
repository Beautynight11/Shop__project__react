import { CART_ADD_TO_LIST, CART_DECREASE_QUANTITY, CART_DELETE_FROM_LIST } from "../constants/actionTypes";

const initialState = {
  list: []
}

export const cart = (state = { ...initialState }, action) => {
  switch (action.type) {
    case CART_ADD_TO_LIST:
      const hasItem = !!state.list.filter(({ id }) => id === action.payload.id)?.[0];
      if (hasItem) {
        return {
          ...state,
          list: state.list.map(item => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + 1
              }
            }
            return item;
          })
        }
      }
      return {
        ...state,
        list: [
          ...state.list,
          {
            ...action.payload,
            quantity: 1
          }
        ]
      }
    case CART_DELETE_FROM_LIST:
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.payload.id)
      }
    case CART_DECREASE_QUANTITY:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity - 1
            }
          }
          return item;
        })
      }
    default:
      return state
  }
}