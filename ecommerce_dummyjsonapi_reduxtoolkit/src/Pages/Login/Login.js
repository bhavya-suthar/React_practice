import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="container">
        <form action="" className="form-control">
          <label htmlFor="">Name:</label>
          <input type="text" placeholder="enter name" className="form-input" />
          <label htmlFor="">Email:</label>
          <input type="text" placeholder="enter email" className="form-input" />
          <button type="submit" className="form-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
