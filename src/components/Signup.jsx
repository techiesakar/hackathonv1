import React from "react";
import { NavLink } from "react-router-dom";


const Signup = () => {
  const body = document.body;

  if (body.classList.contains("home-page")) {
    body.classList.remove("home-page");
  }
  return (
    <>
      <div className="signup flex justify-center items-center">
        <div className="signup-form-wrapper container rounded mt-24">
          <h2 className="text-center p-4 text-2xl font-bold">
            Create your Account
          </h2>
          <form className="signup-form p-6">
            <div className="form-group name mb-6 flex justify-between">
              <div className="fname">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="lname">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-group email mb-6">
              <input type="text" placeholder="Email or Phone" />
            </div>
            <div className="form-group password mb-6">
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-group mb-6 ">
              <input className="checkbox" type="checkbox" required />
              <span className="required">*</span>
              <span className=""> I agree the terms and condition</span>
            </div>

            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Register
            </button>
          </form>
          <div className="already text-center mt-4">
            <p>Already have an account ?</p>

            <NavLink to={"/signin"}>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 mr-2 mb-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Sign In
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
