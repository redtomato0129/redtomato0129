import { createContext, useState } from "react";

export const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
  const [basketIsOpen, setBasketIsOpen] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  const [basketTotal, setBasketTotal] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const values = {
    basketIsOpen,
    setBasketIsOpen,
    basketItems,
    setBasketItems,
    basketTotal,
    setBasketTotal,
    currentQuantity,
    setCurrentQuantity,
  };
  return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>;
};

export default BasketContextProvider;
