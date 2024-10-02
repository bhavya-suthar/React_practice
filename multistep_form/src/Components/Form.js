import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Step2 from "./Step2";
import Step1 from './Step1'
import Step3 from './Step3'


const registerSchema = Yup.object({
  fname: Yup.string().min(2).max(10).required("*First Name is Required!!"),
  lname: Yup.string().min(2).max(10).required("*Last Name is Required!!"),
  // email: Yup.string().email().required("*Email is Required!!"),
  email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email")
    .required("*Email is Required!!"),
  password: Yup.string().max(6).required("*Please Create Your Password..."),
  conPassword: Yup.string()
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

const renderStep = (
  step,
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  next,
  back,
  success,
  handleBlur
) => {
  switch (step) {
    case 1:
      return (
        <Step1
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          next={next}
        />
      );
    case 2:
      return (
        <Step2
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          next={next}
          back={back}

        />
      );
    case 3:
      return (
        <Step3
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          next={next}
          back={back}

        />
      );
    default:
      return (
        <Step1
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          next={next}
        />
      );
  }
};

const Form = () => {
  const defaultValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    startDate: new Date(),
    conPassword: "",
    gender: "male",
    country: "",
    city: "",
    condition: false,
    address: "",
  };

  const [hide, setHide] = useState(false);
  const [hideConPassword, setHideConPassword] = useState(false);
  //   const [fromCity, setFromCity] = useState([]);
  // console.log("🚀 ~ Registration ~ fromCity:", fromCity)

  //   const handleCities = (e) => {
  //     const selectedCountry = e.target.value;
  //     const filteredCities = cities.find(
  //       (element) => element.country === selectedCountry
  //     );
  //     setFromCity(filteredCities ? filteredCities.cities : []);
  //   };

  // const [isStep,setIsStep] = useState(1)
  const [count, setCount] = useState(100);
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  const next = () => {
    setStep((s) => s + 1);
  };

  const back = () => {
    setStep((s) => s - 1);
  };

  return (
    <>
      <h2 className="d-flex justify-content-center mt-2">Form</h2>
      <div className="bg-light d-flex w-50 p-2 gap-4 m-3 justify-content-around align-items-center">
        <h5 className="bg-info rounded-2 p-1">Form1</h5>
        <h5>Form2</h5>
        <h5>Form3</h5>
      </div>
      <div>
        <Formik
          initialValues={defaultValues}
          validationSchema={registerSchema}
          onSubmit={(values, action) => {
            console.log("🚀 ~ Form ~ values:", values);
            action.resetForm();
            setStep(1); // Reset step to 1 after submission
          }}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            setFieldValue,
            isValid,
            dirty,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column justify-content-center align-items-center mt-3"
            >
              {renderStep(
                step,
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                next,
                back,
                success
              )}

              {/* <React.Fragment>{console.log(values)}</React.Fragment> */}
              {/* <div className="bg-light border border-1 p-4 rounded-3 mb-3">
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
                maxDate={new Date()}
                // readOnly={true}
              />

              {/* <input
                type="date"
                name="date"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
                id="date"
              /> */}
              {/* </div>
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
                //   handleCities(e);
                  handleChange(e);
                }}
              >
                <option>Select Country</option>
                {/* {country.map((ele) => (
                  <option>{ele.name}</option>
                ))} */}
              {/* </select>
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
                {/* {fromCity.map((city) => (
                  <option>{city}</option>
                ))} */}
              {/* </select>
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
                Already have an Account?<Link to={"/login"}>login</Link>
              </label>
            </div> */}
              {/* </div>   */}
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Form;
