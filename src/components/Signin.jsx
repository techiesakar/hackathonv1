import React from "react";
import { NavLink } from "react-router-dom";

const Signin = () => {
  const body = document.body;

  if (body.classList.contains("home-page")) {
    body.classList.remove("home-page");
  }
  return (
    <>
      <div className="signup flex justify-center items-center">
        <div className="signup-form-wrapper container rounded mt-24">
          <h2 className="text-center p-4 text-2xl font-bold">
            Login your account
          </h2>
          <form className="signup-form p-6">
            <div className="form-group email mb-6">
              <input type="text" placeholder="Email or Phone" />
            </div>
            <div className="form-group password mb-6">
              <input type="password" placeholder="Password" />
            </div>

            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Signin
            </button>
          </form>
          <div className="forget-pass text-center mt-4">
            <p>Forget Password ?</p>
            <NavLink to={"/forgetpass"}>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 mr-2 mb-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Forget Password
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
