import { createContext, useReducer } from "react";

export const BasketContext = createContext();

export const basketReducer = (state, action) => {
  switch (action.type) {
    case "SET_BASKET":
      return {
        basket: action.payload
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