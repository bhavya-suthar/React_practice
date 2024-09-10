import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
  });
  console.log("🚀 ~ Create ~ value:", value);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", value)
      .then((res) => {
        console.log("🚀 ~ useEffect ~ res:", res);
        navigate("/");
      })
      .catch((err) => console.log("🚀 ~ useEffect ~ err:", err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-light ">
      <div className="w-100 border bg-white shadow p-5 rounded">
        <h2>Add a User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 text-start">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control "
              placeholder="Enter Name"
              onChange={(e) => setValue({ ...value, name: e.target.value })}
            />
          </div>
          <div className="mb-2 text-start">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter Phone No."
              onChange={(e) => setValue({ ...value, phone: e.target.value })}
            />
          </div>
          <button className="btn btn-success" disabled={!value.name || !value.email || !value.phone}>Submit</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;
