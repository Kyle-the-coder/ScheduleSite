import React, { createContext, useState, useContext } from "react";

const BookNowModalContext = createContext();

export const BookNowProvider = ({ children }) => {
  const [isBnActive, setIsBnActive] = useState(false);
  return (
    <BookNowModalContext.Provider value={{ isBnActive, setIsBnActive }}>
      {children}
    </BookNowModalContext.Provider>
  );
};

export const useBookNowModal = () => useContext(BookNowModalContext);
export { BookNowModalContext };
