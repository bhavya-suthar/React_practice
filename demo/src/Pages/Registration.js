import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Registration = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const registerSchema = Yup.object({
    name: Yup.string().min(2).max(10).required("*User Name is Required!!"),
    email: Yup.string().email().required("*Email is Required!!"),
    password: Yup.string().max(6).required("*Please Creat e Your Password..."),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password didn't Match"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      onSubmit: (values, action) => {
        console.log("🚀 ~ Registration ~ values:", values);
        action.resetForm();
      },
    });
  //   console.log("🚀 ~ Registration ~ errors:", errors);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
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
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label for="exampleInputEmail1" className="form-label">
              User Name
            </label>
            <input
              type="text"
              name="name"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            {errors.name && touched.name ? <p style={{color:"red"}}>{errors.name}</p> : null}
          </div>
          <div
            className="mb-3"
            style={{ display: "flex", flexDirection: "column"}}
          >
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            {errors.email && touched.email ? <p style={{color:"red"}}>{errors.email}</p> : null}
          </div>
          <div
            className="mb-3"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword1"
            />
            {errors.password && touched.password ? (
              <p style={{color:"red"}}>{errors.password}</p>
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
              name="confirmPassword"
              value={values.confirmPassword}
              onBlur={handleBlur}
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword1"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p style={{color:"red"}}>{errors.confirmPassword}</p>
            ) : null}
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <div>
            <label className="form-check-label" for="exampleCheck1" style={{marginBottom:"10px"}}>
              Already Create an Account <Link to={"/login"}>login</Link>
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
