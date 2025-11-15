import { createContext, useState } from "react";

const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {
  const [progressList, setProgressList] = useState([]);
  return (
    <ProgressContext.Provider value={{ progressList, setProgressList }}>
      {children}
    </ProgressContext.Provider>
  );
};

export { ProgressContext, ProgressProvider };
