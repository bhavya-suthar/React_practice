import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";


const Login = () => {
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
          navigate("/dashboard");
          localStorage.setItem("isLogged",JSON.stringify(true))
        } else {
          return null;
        }
        console.log("🚀 ~ Login ~ values:", values);
        action.resetForm();
      },
    });


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
              Email address
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
            className="mb-3"
            style={{ display: "flex", flexDirection: "column", width: "250px" }}
          >
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
              id="exampleInputPassword1"
            />
            {errors.password && touched.password ? (
              <p style={{ color: "red" }}>{errors.password}</p>
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
            <label
              className="form-check-label"
              for="exampleCheck1"
              style={{ marginBottom: "10px" }}
            >
             <Link to={"/fpassword"}>Forgot Password?</Link>
            </label>
          </div>
          <div>
            <label
              className="form-check-label"
              for="exampleCheck1"
              style={{ marginBottom: "10px" }}
            >
              Not have any Account? <Link to={"/register"}>SingUp</Link>
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

export default Login;
