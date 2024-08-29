import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    pageType: "",
    unidad: 0,
    pageTitle: "",
    pageSubtitle: "",
    isOpenDrawer: false,
  });
  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
