import React from "react";
import { Form } from "react-bootstrap";

const Form_Step1 = ({ values, handleChange, handleBlur, errors }) => {
  console.log("🚀 ~ errors:", errors)
  return (
    <div>
      <Form>
        <div className="d-flex bg-light p-5 flex-column rounded-3 border border-2 justify-content-center align-items-center ">
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
              />{" "}
              {errors.fname && <p style={{ color: "red" }}>{errors.fname}</p>}
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
              />{" "}
              {errors.lname && <p style={{ color: "red" }}>{errors.lname}</p>}
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
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </Form.Group>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Form_Step1;
