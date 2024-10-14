import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { checkuser } from "../Redux/UserSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginSchema = Yup.object({
    email: Yup.string()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email")
      .required("*Email is Required!!"),

    password: Yup.string().max(6).required("password should be 6 character..."),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,

      onSubmit: (values, action) => {
        console.log("🚀 ~ Login ~ values:", values);
         dispatch(checkuser(values))
        // const loggedinUser = dispatch(checkuser(values))
        // if(loggedinUser){
        //   navigate("/dashboard"); // Redirect to the dashboard if login is successful

        // }else{
        //   alert("Invalid email or password."); // Show error if login fails
        // }
        action.resetForm();
      },
    });
  return (
    <>
      <h1 className="d-flex justify-content-center align-items-center mt-4">
        Login
      </h1>
      <div className="d-flex gap-3  justify-content-center">

      <form
        className="w-50 d-flex justify-content-center align-item-center mx-5 mt-5"
        onSubmit={handleSubmit}
      >
        <div className="d-flex flex-column justify-content-center shadow p-3 mb-5 bg-light rounded">
          {/* <div className="bg-light border border-1 p-3 rounded-3"> */}
          
          <div className="mb-3">
            <label className="form-label">
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
              <p className="text-danger">{errors.email}</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">
              Password <span className="text-danger">*</span>
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                id="exampleInputPassword1"
              />
              <span
                style={{
                  position: "absolute",
                  top: "20%",
                  right: "10px",
                  transform: "tranlateY(-50%)",
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <i className="fa-regular fa-eye-slash"></i>
                ) : (
                  <i className="fa-regular fa-eye"></i>
                )}
              </span>
            </div>
            {errors.password && touched.password ? (
              <p className="text-danger">{errors.password}</p>
            ) : null}
          </div>
          <Link to="/forgotpassword" className="mb-2"><span>Forgot Password?</span></Link>
          <button type="submit" className="btn btn-primary w-50">
            Submit
          </button>
          <div>
            <label className="form-check-label" for="exampleCheck1">
              Not have any Account? <Link to={"/register"}>SingUp</Link>
            </label>
          </div>
        </div>
      </form>
      </div>
    </>
  );
};

export default Login;
