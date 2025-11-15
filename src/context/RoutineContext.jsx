import { createContext, useState } from "react";

const RoutineContext = createContext();

const RoutineProvider = ({ children }) => {
  const [rutineList, setRutineList] = useState([]);
  return (
    <RoutineContext.Provider value={{ rutineList, setRutineList }}>
      {children}
    </RoutineContext.Provider>
  );
};

export { RoutineContext, RoutineProvider };
