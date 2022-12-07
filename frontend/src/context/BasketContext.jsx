import { createContext, useReducer } from "react";

export const BasketContext = createContext();

export const basketReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
    case "SET_BASKET":
    case "UPDATE_BASKET":
      return {
        basket: action.payload
      }
    case "DELETE_PRODUCT":
      return {
        basket: state.basket.filter((b) => b.item_id !== action.payload.item_id)
      }
    default: 
      return state;
  }
}

export const BasketContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(basketReducer, {
    basket: null
  });

  return (
    <BasketContext.Provider value={{ ...state, dispatch }}>
      { children }
    </BasketContext.Provider>
  )
}