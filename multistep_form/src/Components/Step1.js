import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";

const Step1 = (props) => {
  // const initialValues = {
  //   fname: "",
  //   lname: "",
  //   email: "",
  //   password: "",
  //   conPassword: "",
  // };

  // const registerSchema = Yup.object({
  //   fname: Yup.string().min(2).max(10).required("*First Name is Required!!"),
  //   lname: Yup.string().min(2).max(10).required("*Last Name is Required!!"),
  //   // email: Yup.string().email().required("*Email is Required!!"),
  //   email: Yup.string()
  //     .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email")
  //     .required("*Email is Required!!"),
  //   password: Yup.string().max(6).required("*Please Create Your Password..."),
  //   conPassword: Yup.string()
  //     .required()
  //     .oneOf([Yup.ref("password"), null], "*Password didn't Match"),
  // });

  // const { values, errors, touched, handleBlur, handleChange, handleSubmit,isValid ,dirty} =
  //   useFormik({
  //     initialValues,
  //     validationSchema: registerSchema,
  //     onSubmit: (values, action) => {
  //       console.log("🚀 ~ Registration ~ values:", values);
  //       action.resetForm();
  //     },
  //   });

  const {
    values,
    handleChange,
    handleSubmit,
    back,
    next,
    errors,
    touched,
    handleBlur,
  } = props;

  return (
    <div className="d-flex justify-content-center">
      {/* 
      <Form
        onSubmit={handleSubmit}
        className="d-flex bg-light p-5 flex-column rounded-3 border border-2 justify-content-center align-items-center"
      > */}
      <div className="d-flex bg-light p-5 flex-column rounded-3 border border-2 justify-content-center align-items-center">
        <div className="d-flex gap-3 mb-3">
          <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              value={values.fname}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="First name"
            />
            {errors.fname && touched.fname ? (
              <p className="text-danger w-75">{errors.fname}</p>
            ) : null}
          </Form.Group>
          <Form.Group>
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              name="lname"
              value={values.lname}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Last name"
            />
            {errors.lname && touched.lname ? (
              <p className="text-danger w-75">{errors.lname}</p>
            ) : null}
          </Form.Group>
        </div>
        <div className="mb-4 w-100">
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Enter your Email Id"
            />
            {errors.email && touched.email ? (
              <p className="text-danger w-75">{errors.email}</p>
            ) : null}
          </Form.Group>
        </div>
        <div className="d-flex gap-1">
          {/* <Button onClick={back}>Back</Button> */}
          <Button onClick={next}>Countinue</Button>
        </div>
      </div>
      {/* </Form> */}
    </div>
  );
};

export default Step1;
