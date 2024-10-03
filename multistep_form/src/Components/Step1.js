import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Step1 = (props) => {
  const {
    values,
    handleChange,
    // handleSubmit,
    // back,
    next,
    errors,
    touched,
    handleBlur,
  } = props;

  const isButtonDisabled = !values.fname || !values.lname || !values.email;


  return (
    <div className="d-flex justify-content-center w-75">
      {/* 
      <Form
        onSubmit={handleSubmit}
        className="d-flex bg-light p-5 flex-column rounded-3 border border-2 justify-content-center align-items-center"
      > */}
      <div className="d-flex bg-light p-5 flex-column rounded-3 border border-2 justify-content-center align-items-center">
        <h1>Form1</h1>

        <div className="d-flex gap-3 mb-3">
          <Form.Group>
            <Form.Label>First name  <span className="text-danger">*</span></Form.Label>
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
            <Form.Label>Last name  <span className="text-danger">*</span></Form.Label>
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
            <Form.Label>Email  <span className="text-danger">*</span></Form.Label>
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
          <Button onClick={next} disabled={isButtonDisabled}>Next</Button>
        </div>
      </div>
      {/* </Form> */}
    </div>
  );
};

export default Step1;
