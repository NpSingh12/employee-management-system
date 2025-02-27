import React, { useState } from "react";

const Header = (props) => {
  // const [username, setusername] = useState(null)
  // if(!data){
  //   setusername('Admin')
  // }else{
  //   setusername(data.firstName)
  // }

  const logoutuser = () => {
    localStorage.setItem("LogedInUser", "");
    props.changeUser("");
    // window.location.reload();
  };

  return (
    <div className="flex flex-col md:flex-row items-end justify-between">
      <h1 className="text-2xl font-medium text-left w-full md:w-auto">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">
          {props.data ? props.data.firstName : "Admin"} 👋
        </span>{" "}
      </h1>
      <button
        onClick={logoutuser}
        className="bg-red-500 text-white px-3 py-2 rounded-sm text-lg font-medium mt-4 md:mt-0"
      >
        LogOut
      </button>
    </div>
  );
};

export default Header;
