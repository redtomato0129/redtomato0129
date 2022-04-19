import { createContext, useState } from "react";

export const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
  const [basketIsOpen, setBasketIsOpen] = useState(false);
  const values = {
    basketIsOpen,
    setBasketIsOpen,
  };
  return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>;
};

export default BasketContextProvider;
