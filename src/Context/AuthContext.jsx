import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthProvide = createContext();

const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState([]);

  // ✅ Load data from localStorage on first render
  useEffect(() => {
    const storedData = localStorage.getItem("employees");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      setLocalStorage();
      const { employees } = getLocalStorage();
      setUserData(employees);
    }
  }, []);

  // ✅ Save userData to localStorage every time it updates
  useEffect(() => {
    if (userData.length > 0) {  
      localStorage.setItem("employees", JSON.stringify(userData)); 
      console.log("Updated localStorage:", userData);  // ✅ Debugging log
    }
  }, [userData]);  // ✅ Runs whenever userData updates

  return (
    <AuthProvide.Provider value={[userData, setUserData]}>
      {children}
    </AuthProvide.Provider>
  );
};

export default AuthContext;
