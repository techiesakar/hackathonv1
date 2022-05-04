import React from "react";

const contact = () => {
  const body = document.body;

    if (body.classList.contains("home-page")) {
      body.classList.remove("home-page");
    }
  return (
    <div className="contact">
      <div className="contact-wrapper container mx-auto">
        <div className="left mt-20">
          <h2 className=" p-4 text-2xl font-bold">Contact us</h2>{" "}
          <form className="p-6">
            <div className="form-group name">
              <label>
                Name <span className="required">*</span>
              </label>

              <div className="form-control flex justify-between">
                <input
                  className="fname mr-2"
                  type="text"
                  placeholder="First Name"
                />
                <input type="lname" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-group">
              <label>
                Email <span className="required">*</span>
              </label>

              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <label>
                Subject <span className="required">*</span>
              </label>

              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
              <label>
                Message <span className="required">*</span>
              </label>

              <textarea
                className="resize-none"
                id=""
                cols="30"
                rows="6"
              ></textarea>
            </div>

            <div className="forget-pass mt-4">
            
            
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 mr-2 mb-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Submit
              </button>
           
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
