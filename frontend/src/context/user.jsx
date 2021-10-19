import React, { createContext, useState } from "react";
import { getAuth } from "../utils/auth";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(getAuth());

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
