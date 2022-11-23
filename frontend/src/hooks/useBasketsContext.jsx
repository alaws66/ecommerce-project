import { BasketsContext } from "../context/BasketContext";
import { useContext } from "react";

export const useBasketsContext = () => {
  const context = useContext(BasketsContext);

  if (!context) {
    throw Error('useBasketsContext must be used inside an BasketsContextProvider');
  }

  return context;
}