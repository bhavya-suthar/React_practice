import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const ResetPassword = () => {
  const initialValues = {
    password: "",
    conPassword: "",
  };

  const regScema = Yup.object({
    password: Yup.string().max(6).required("*Please Create Your Password!!!"),
    conPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "*Password didn't match!!"),
  });

  const navigate = useNavigate()
  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues,
      validationSchema: regScema,
      onSubmit: (values, actions) => {
        console.log(values);
       navigate("/login")
      },
    });

  return (
    <div>
      <h1>Reset Password</h1>
      <form
        className="container"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div
            className="mb-3"
            style={{ display: "flex", flexDirection: "column", width: "250px" }}
          >
            <label for="exampleInputEmail1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            {errors.password && touched.password ? (
              <p style={{ color: "red" }}>{errors.password}</p>
            ) : null}
          </div>
          <div
            className="mb-3"
            style={{ display: "flex", flexDirection: "column", width: "250px" }}
          >
            <label for="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="conPassword"
              value={values.conPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
              id="exampleInputPassword1"
            />
            {errors.conPassword && touched.conPassword ? (
              <p style={{ color: "red" }}>{errors.conPassword}</p>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
