import { createContext, useState } from 'react';
import { useContext } from 'react';

export const ShowFilterContext = createContext(null);

export const ShowFilterProvider = ({ children }) => {
  const [show, setShow] = useState(true);

  return (
    <ShowFilterContext.Provider value={{ show, setShow }}>
      {children}
    </ShowFilterContext.Provider>
  );
};

export const useShowFilterContext = () => useContext(ShowFilterContext);
