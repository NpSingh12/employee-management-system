import React, { useContext } from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";
import { AuthProvide } from "../../Context/AuthContext";

const AdminDashboard = (props) => {
  const [userData, setuserData] = useContext(AuthProvide);

  return (
    <div className="h-screen w-full p-5 md:p-7">
      <Header changeUser={props.changeUser} />
      <CreateTask userData={userData} setuserData={setuserData} />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
