import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { country } from "../jsonFolder/countries";
import { cities } from "../jsonFolder/cities";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Registration = () => {
  const [count, setCount] = useState(100);
  const [startDate, setStartDate] = useState(new Date());

  const initialValues = {
    name: "",
    email: "",
    password: "",
    startDate: null,
    confirmPassword: "",
    gender: "male",
    country: "",
    city: "",
    condition: false,
    address: "",
  };
  const registerSchema = Yup.object({
    name: Yup.string().min(2).max(10).required("*User Name is Required!!"),
    // email: Yup.string().email().required("*Email is Required!!"),
    email: Yup.string()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email")
      .required("*Email is Required!!"),
    password: Yup.string().max(6).required("*Please Create Your Password..."),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "*Password didn't Match"),
    gender: Yup.string().required("*Gender Field is Required"),
    // date: Yup.string().required("*Please Select the Date"),
    startDate: Yup.date().nullable().required("*Please Select the Date"),
    country: Yup.string().required("*Country is Required"),
    city: Yup.string().required("*City is Required"),
    address: Yup.string().required("*Address Field is Required"),
    condition: Yup.boolean().oneOf(
      [true],
      "*You have to agree term and condition!"
    ),
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: (values, action) => {
      console.log("🚀 ~ Registration ~ values:", values);
      action.resetForm();
    },
  });
  const [hide, setHide] = useState(false);
  const [hideConPassword, setHideConPassword] = useState(false);
  const [fromCity, setFromCity] = useState([]);
  // console.log("🚀 ~ Registration ~ fromCity:", fromCity)

  const handleCities = (e) => {
    const selectedCountry = e.target.value;
    const filteredCities = cities.find(
      (element) => element.country === selectedCountry
    );
    setFromCity(filteredCities ? filteredCities.cities : []);
  };

  return (
    <>
      <h2 className="d-flex justify-content-center mt-2">Registration</h2>

      <div>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center align-items-center mt-3"
        >
          {/* <React.Fragment>{console.log(values)}</React.Fragment> */}
          <div className="bg-light border border-1 p-3 rounded-3">
            <div className="d-flex gap-3">
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

            <div className="d-flex gap-3">
              <div className="mb-3 d-flex flex-column">
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
                      <i class="fa-regular fa-eye-slash"></i>
                    ) : (
                      <i class="fa-regular fa-eye"></i>
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
                      <i class="fa-regular fa-eye-slash"></i>
                    ) : (
                      <i class="fa-regular fa-eye"></i>
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
            <div className="date d-flex gap-3 mb-3">
              <label>
                DOB <span className="text-danger">*</span>
              </label>

              <DatePicker
                selected={values.startDate}
                onChange={(date) => setFieldValue("startDate", date)}
              />

              {/* <input
                type="date"
                name="date"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
                id="date"
              /> */}
            </div>
            {errors.startDate && touched.startDate ? (
              <p className="text-danger">{errors.startDate}</p>
            ) : null}
            <div
              className="address w-100 d-flex gap-3 mb-3 align-items-center"
              style={{ position: "relative" }}
            >
              <label>
                Address <span className="text-danger">*</span>
              </label>
              <textarea
                className="address"
                id="address"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={count}
              />
              <p
              // style={{position:"absolute",top:"75%",right:"44%",transform:"translateY(-50%)"}}
              >
                {values.address.length}/{count}
              </p>
            </div>
            {errors.address && touched.address ? (
              <p className="text-danger">{errors.address}</p>
            ) : null}
            <div className="d-flex gap-3 mb-3">
              <select
                id="country"
                name="country"
                // value={values.country}
                className="country w-50"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleCities(e);
                  handleChange(e);
                }}
              >
                <option>Select Country</option>
                {country.map((ele) => (
                  <option>{ele.name}</option>
                ))}
              </select>
              {errors.country && touched.country ? (
                <p className="text-danger">{errors.country}</p>
              ) : null}

              <select
                id="city"
                name="city"
                className="city w-50"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select City</option>
                {fromCity.map((city) => (
                  <option>{city}</option>
                ))}
              </select>
              {errors.city && touched.city ? (
                <p className="text-danger">{errors.city}</p>
              ) : null}

              <br />
            </div>

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
            ) : null}
            <div className="d-flex justify-content-center align-items-center mt-0">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div>
              <label
                className="form-check-label mb-2 d-flex justify-content-center"
                for="exampleCheck1"
              >
                Already have an Account?<Link to={"/login"}>login</Link>
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
