import { Formik } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import * as Yup from "yup";

const Form_Step1 = () => {
  const defaultValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    conPassword: "",
  };
  const form1Schema = Yup.object().shape({
    fname: Yup.string().min(2).max(10).required("*First Name is Required!!"),
    lname: Yup.string().min(2).max(10).required("*Last Name is Required!!"),
    email: Yup.string()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid Email")
      .required("*Email is Required!!"),
  });

  return (
    <div>
      <Formik
        initialValues={defaultValues}
        validationSchema={form1Schema}
        onSubmit={(values, action) => {
          console.log("🚀 ~ values:", values);
          action.resetForm();
        }}
      >
        {({
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          errors,
          touched,
        }) => (
          <form action="">
            <div className="d-flex bg-light p-5 flex-column rounded-3 border border-2 justify-content-center align-items-center">
            <h2>Form1</h2>

              <div className="d-flex gap-3 mb-3">
                <Form.Group>
                  <Form.Label>
                    First name <span className="text-danger">*</span>
                  </Form.Label>
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
                  <Form.Label>
                    Last name <span className="text-danger">*</span>
                  </Form.Label>
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
              <div className="mb-4 w-75">
                <Form.Group>
                  <Form.Label>
                    Email <span className="text-danger">*</span>
                  </Form.Label>
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
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form_Step1;
