import { createContext, useReducer } from "react";

export const BasketsContext = createContext();

export const basketsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return true;
    // return {
      //   products: [action.payload, ...state.products]
      // }
    default: 
      return state;
  }
}

export const BasketsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(basketsReducer, {
    products: null
  });

  return (
    <BasketsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </BasketsContext.Provider>
  )
}