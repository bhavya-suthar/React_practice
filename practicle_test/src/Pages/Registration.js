import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { adduser } from "../Redux/UserSlice";

const Registration = () => {
  //   const [count, setCount] = useState(100);
  //   const [startDate, setStartDate] = useState(new Date());
  //   console.log("🚀 ~ Registration ~ startDate:", startDate);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    // startDate: new Date(),
    confirmPassword: "",
    gender: "male",
    city: "",
    // condition: false,
    // address: "",
  };
  const registerSchema = Yup.object({
    name: Yup.string().min(2).max(10).required("*User Name is Required!!"),
    email: Yup.string()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email")
      .required("*Email is Required!!"),
    phone: Yup.string().max(10).required("*Phone Number must be 10 digits"),
    password: Yup.string().max(6).required("*Please Create Your Password..."),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "*Password didn't Match"),
    gender: Yup.string().required("*Gender Field is Required"),
    // date: Yup.string().required("*Please Select the Date"),
    // startDate: Yup.date().nullable().required("*Please Select the Date"),
    // country: Yup.string().required("*Country is Required"),
    city: Yup.string().required("*City is Required"),
    // address: Yup.string().required("*Address Field is Required"),
    // condition: Yup.boolean().oneOf(
    //   [true],
    //   "*You have to agree term and condition!"
    // ),
  });

  const dispatch = useDispatch()
  // const user = useSelector((state) => state.user.user);
  // console.log(user);
  // const addUserHandler = () => {
  //   // e.preventDefault();
  //   if (users.values !== "") {
  //     dispatch(adduser(values));
  //   }
  //   // dispatch(setInputValue(""));
  // };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: (values, action) => {
      console.log("🚀 ~ Registration ~ values:", values);
    dispatch(adduser(values));

      action.resetForm();
    },
  });
  const [hide, setHide] = useState(false);
  const [hideConPassword, setHideConPassword] = useState(false);

  return (
    <>
      <h2 className="d-flex justify-content-center mt-2">Registration</h2>
      <div>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center align-items-center mt-3"
        >
        <div className="shadow p-3 mb-5 bg-light rounded">
          {/* <div className="bg-light border border-1 p-4 rounded-3 mb-3"> */}
            <div className="d-flex gap-3  justify-content-center">
              <div className="mb-3 d-flex flex-column">
                <label for="exampleInputEmail1" className="form-label">
                  User Name <span className="text-danger">*</span>
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
                {errors.name && touched.name ? (
                  <p className="text-danger mw-100">{errors.name}</p>
                ) : null}
              </div>
              <div className="mb-3 d-flex flex-column">
                <label for="exampleInputEmail1" className="form-label">
                  Email <span className="text-danger">*</span>
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
                {errors.email && touched.email ? (
                  <p className="text-danger">{errors.email}</p>
                ) : null}
              </div>
            </div>
            <div className="mb-3 d-flex flex-column">
              <label for="exampleInputEmail1" className="form-label">
                Phone No. <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                name="phone"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
                className="form-control"
                id="exampleInputphone1"
                aria-describedby="phoneHelp"
              />
              {errors.phone && touched.phone ? (
                <p className="text-danger">{errors.phone}</p>
              ) : null}
            </div>

            <div className="d-flex gap-3  justify-content-center">
              <div className="mb-3 d-flex flex-column ">
                <label for="exampleInputPassword1" className="form-label">
                  Password <span className="text-danger">*</span>
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type={hideConPassword ? "text" : "password"}
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
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
                    onClick={() => setHideConPassword(!hideConPassword)}
                  >
                    {hideConPassword ? (
                      <i className="fa-regular fa-eye-slash"></i>
                    ) : (
                      <i className="fa-regular fa-eye"></i>
                    )}
                  </span>
                </div>
                {errors.password && touched.password ? (
                  <p className="text-danger w-75">{errors.password}</p>
                ) : null}
              </div>
              <div className="mb-3 d-flex flex-column">
                <label for="exampleInputPassword1" className="form-label">
                  Confirm Password <span className="text-danger">*</span>
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type={hide ? "text" : "password"}
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                    }}
                    onClick={() => setHide(!hide)}
                  >
                    {hide ? (
                      <i className="fa-regular fa-eye-slash"></i>
                    ) : (
                      <i className="fa-regular fa-eye"></i>
                    )}
                  </span>
                </div>
                {errors.confirmPassword && touched.confirmPassword ? (
                  <p className="text-danger w-75">{errors.confirmPassword}</p>
                ) : null}
              </div>
            </div>
            <div className="gender d-flex gap-3 mb-3">
              <label>
                Gender <span className="text-danger">*</span>
              </label>
              <input
                id="male"
                name="gender"
                value="male"
                checked={values.gender === "male"}
                onChange={handleChange}
                onBlur={handleBlur}
                type="radio"
              />
              <label>Male</label>
              <input
                id="female"
                name="gender"
                value="female"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.gender === "female"}
                type="radio"
              />
              <label>Female</label>
              <br />
            </div>
            {errors.gender && touched.gender ? (
              <p className="text-danger">{errors.gender}</p>
            ) : null}
            <div className="d-flex gap-3 mb-3">
              <select
                id="city"
                name="city"
                className="city w-50"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select City</option>
                <option value="ahmedabad">Ahmedabad</option>
                <option value="surat">Surat</option>
                <option value="vadodara">Vadodara</option>
              </select>
              {errors.city && touched.city ? (
                <p className="text-danger">{errors.city}</p>
              ) : null}

              <br />
            </div>
            {/* 
          <div className="mb-2 form-check">
            <input
              type="checkbox"
              name="condition"
              checked={values.condition}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Agree Term & Condition{" "}
            </label>
          </div>
          {errors.condition && touched.condition ? (
            <p className="text-danger">{errors.condition}</p>
          ) : null} */}
            <div className="d-flex justify-content-center align-items-center mt-0 mb-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div>
              <label
                className="form-check-label d-flex justify-content-center"
                for="exampleCheck1"
              >
                Already have an Account?<Link to={"/"}>login</Link>
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
