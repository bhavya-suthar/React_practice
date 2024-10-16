import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { forgotPassword } from "../Redux/UserSlice";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  // const checkEmail = useSelector(state => state.user.emailFound)
  // console.log("🚀 ~ ForgotPassword ~ checkEmail:", checkEmail)
  const initialValues = {
    email: "",
  };

  const fpasswordScema = Yup.object({
    email: Yup.string().email().required("Please enter your email!!!"),
  });

  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: fpasswordScema,

      onSubmit: (values, action) => {
        // debugger
       dispatch(forgotPassword(values));
        // navigate("/changepassword")
      },
    });

  return (
    <div>
      <h1>Forgot Password</h1>

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
        {/* <div
        style={{
          border: "1px solid black",
          padding: "20px",
          borderRadius: "10px",
        }}
      > */}
        <div className="d-flex flex-column justify-content-center shadow p-3 mb-5 bg-light rounded">
          <div
            className="mb-3"
            style={{ display: "flex", flexDirection: "column", width: "250px" }}
          >
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
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="submit"
              className="btn btn-warning"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
