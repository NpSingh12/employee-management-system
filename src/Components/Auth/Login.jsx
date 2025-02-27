import React from "react";
import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setemail("");
    setpassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center p-4">
      <div className="border-2 border-emerald-600 p-5 md:p-10 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Welcome! Please Login
        </h2>
        <form
          onSubmit={(e) => {
            submithandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 rounded-full w-full"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 rounded-full mt-3 w-full"
            type="password"
            placeholder="Enter your Password"
          />
          <button className="text-white border-none bg-emerald-600 py-3 px-5 text-xl outline-none rounded-full mt-5 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
