import { createContext, useState, useContext } from 'react';

const loaderContext = createContext({ showLoader: false });

export const LoaderProvider = ({ children }) => {
  const [showLoader, setShowLoader] = useState(false);
  return (
    <loaderContext.Provider value={{ showLoader, setShowLoader }}>
      {children}
    </loaderContext.Provider>
  );
};

export const useLoader = () => useContext(loaderContext);
