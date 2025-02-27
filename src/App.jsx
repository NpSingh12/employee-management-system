import React, { useContext, useEffect, useState } from "react";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import Login from "./Components/Auth/Login";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthProvide } from "./Context/AuthContext";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthProvide);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("LogedInUser");
    if (loggedInUser) {
      const storedUser = JSON.parse(loggedInUser);
      setUser(storedUser.role);
  
      // ✅ Ensure userData and storedUser.data are available
      if (userData && storedUser.data) {
        const foundUser = userData.find(user => user.email === storedUser.data?.email);
        setLoggedInUserData(foundUser || storedUser.data);
      }
    }
  }, [userData]);  // ✅ Ensures updates when userData changes.
  
  

  const handleLogin = (email, password) => {
    if (userData) {
      if (email === 'admin@me.com' && password === '123') {
        setUser("admin");
        localStorage.setItem("LogedInUser", JSON.stringify({ role: "admin" }));
        setLocalStorage({ role: "admin" });
        return;
      }
      const employee = userData.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee");
        localStorage.setItem(
          "LogedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        setLoggedInUserData(employee);
        return;
      }

      alert("Invalid email or password");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} setUserData={setUserData} />
      ) : ""}
    </>
  );
};

export default App;