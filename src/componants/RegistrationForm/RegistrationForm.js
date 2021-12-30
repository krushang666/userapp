import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationForm = (props) => {
  const [userInput, setuserInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const NameHandler = (e) => {
    setuserInput((prevState) => {
      return {
        ...prevState,
        name: e.target.value,
      };
    });
  };
  const EmailHandler = (e) => {
    setuserInput((prevState) => {
      return {
        ...prevState,
        email: e.target.value,
      };
    });
  };
  const PasswordHandler = (e) => {
    setuserInput((prevState) => {
      return {
        ...prevState,
        password: e.target.value,
      };
    });
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(userInput);
    setuserInput({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div className="container">
        <div className="card m-5">
          <div className="card-header bg-dark_blue text-white">
            <h1 className="text-center p-3">Registration Form</h1>
          </div>
          <div className="card-body">
            <div className="row mt-3">
              <div className="col-6 offset-3">
                <input
                  type="text"
                  onChange={NameHandler}
                  className="form-control custom_input"
                  value={userInput.name}
                  placeholder="Enter Name"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-6 offset-3">
                <input
                  type="text"
                  onChange={EmailHandler}
                  value={userInput.email}
                  className="form-control custom_input"
                  placeholder="Enter Email"
                />
              </div>
            </div>

            <br />
            <div className="row">
              <div className="col-6 offset-3">
                <input
                  type="text"
                  onChange={PasswordHandler}
                  value={userInput.password}
                  className="form-control custom_input"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <br />
            <br />
            <div className="row mb-5">
              <div className="col-6 offset-3 text-center">
                <input type="submit" className="btn btn-outline-success" />
                <br />
                <br />
                Already a User ? <Link to="/"> Login Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
