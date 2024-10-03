import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
// import { Link } from "react-router-dom";
// import DatePicker from "react-datepicker";
import Step2 from "./Step2";
import Step1 from "./Step1";
import Step3 from "./Step3";

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
  date: Yup.string().required("*Please Select the Date"),
  country: Yup.string().required("*Country is Required"),
  city: Yup.string().required("*City is Required"),
  address: Yup.string().required("*Address Field is Required"),
  condition: Yup.boolean().oneOf(
    [true],
    "*You have to agree term and condition!"
  ),
});


const Form = () => {
  const defaultValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    date:"",
    conPassword: "",
    gender: "male",
    country: "",
    city: "",
    condition: false,
    address: "",
  };

  // const [hide, setHide] = useState(false);
  // const [hideConPassword, setHideConPassword] = useState(false);
  //   const [fromCity, setFromCity] = useState([]);
  // console.log("🚀 ~ Registration ~ fromCity:", fromCity)

  //   const handleCities = (e) => {
  //     const selectedCountry = e.target.value;
  //     const filteredCities = cities.find(
  //       (element) => element.country === selectedCountry
  //     );
  //     setFromCity(filteredCities ? filteredCities.cities : []);
  //   };

  // const [count, setCount] = useState(100);
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
      {/* <h2 className="d-flex justify-content-center mt-2">Form</h2> */}
      <div className="bg-light d-flex w-50 p-2 gap-4 m-3 justify-content-around align-items-center">
        <h5 className={`p-3 ${step === 1 ? "bg-primary rounded-4 text-white" : ""}`} >
          Form1
        </h5>
        <h5
          className={`p-3 ${
            step === 2 ? "bg-primary rounded-4 text-white" : ""
          }`}
        >
          Form2
        </h5>
        <h5
          className={`p-3 ${
            step === 3 ? "bg-primary rounded-4 text-white" : ""
          }`}
        >
          Form3
        </h5>
      </div>
      <div>
        <Formik
          initialValues={defaultValues}
          validationSchema={registerSchema}
          onSubmit={(values, action) => {
            console.log("🚀 ~ Form ~ values:", values);
            setStep(1);
            action.resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            setFieldValue,
            handleSubmit,
            validateForm,
          }) => (
            <form className="d-flex flex-column justify-content-center align-items-center mt-3">
              {step === 1 && (
                <Step1
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  next={next}
                />
              )}
              {step === 2 && (
                <Step2
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  next={next}
                  back={back}
                />
              )}
              {step === 3 && (
                <Step3
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  next={next}
                  back={back}
                />
              )}
             </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Form;
