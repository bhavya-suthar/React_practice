import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Login = ({setFlag}) => {
  const [showPassword,setShowPassword] =useState(false)
  const initialValues = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object({
    email: Yup.string().email().required("Email is Required!!"),
    password: Yup.string().max(6).required("password should be 6 character..."),
  });

  const navigate = useNavigate();
  const Email_env = process.env.REACT_APP_EMAIL;
  console.log("🚀 ~ Login ~ Email_env:", Email_env);
  const Password_env = process.env.REACT_APP_PASSWORD;
  console.log("🚀 ~ Login ~ Password_env:", Password_env);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,

      onSubmit: (values, action) => {
        if (Email_env === values.email && Password_env === values.password) {
          // debugger
          navigate("/dashboard");
          localStorage.setItem("flag", JSON.stringify(true));
          setFlag(true)
        } else {
          alert("Enter valid Email & Password!!!")
        }
        console.log("🚀 ~ Login ~ values:", values);
        action.resetForm();
      },
    });

  return (
    <div>
      <h1 className="d-flex justify-content-center align-items-center mt-4">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div
        className="bg-light border border-1 p-3 rounded-3">
          <div
            className="mb-3 d-flex flex-column w-100">
            <label for="exampleInputEmail1" className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            {errors.email && touched.email ? (
              <p style={{ color: "red" }}>{errors.email}</p>
            ) : null}
          </div>
          <div
            className="mb-3 d-flex flex-column w-100"
          >
            <label for="exampleInputPassword1" className="form-label">
              Password <span className="text-danger">*</span>
            </label>
            <div style={{position:"relative" }}>
            <input
              type={showPassword?"text":"password"}
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
              id="exampleInputPassword1"
            /> <span style={{position:"absolute",cursor:"pointer",top:"50%",right:"10px",transform:"translateY(-50%)"}} onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <i class="fa-regular fa-eye"></i>
                  ) : (
                    <i class="fa-regular fa-eye-slash"></i>
                  )}
                </span>
            </div>
               
            {errors.password && touched.password ? (
              <p style={{ color: "red" }}>{errors.password}</p>
            ) : null}
          </div>
          <div>
            <label
              className="form-check-label"
              for="exampleCheck1"
              style={{ marginBottom: "10px" }}
            >
             <Link to={"/fpassword"}>Forgot Password?</Link>
            </label>
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
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
          <div>
            <label
              className="form-check-label"
              for="exampleCheck1"
              >
              Not have any Account? <Link to={"/register"}>SingUp</Link>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
