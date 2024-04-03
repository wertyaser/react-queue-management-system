import React from "react";

const Login = () => {
  return (
    <div className="mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center ">
        Queue Management System
      </h1>
      <form action="" className="max-w-sm mx-auto mt-5">
        <div className="mb-5">
          <input
            className="bg-gray-50 border rounded-lg border-gray-300 text-gray-900 text-sm rounded-lg: focus:ring-blue-500 block w-full p-2.5"
            type="text"
            name=""
            id=""
            placeholder="Username"
          />
        </div>
        <div className="mb-5">
          <input
            className="bg-gray-50 border rounded-lg border-gray-300 text-gray-900 text-sm rounded-lg: focus:ring-blue-500 block w-full p-2.5"
            type="password"
            name=""
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="p-3 border border-gray-300 rounded-lg w-full bg-gray-50 text-gray-900 text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
