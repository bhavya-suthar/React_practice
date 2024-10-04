import React from "react";
import { Button, Form } from "react-bootstrap";

const Form_Step3 = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  errors,
}) => {
  return (
    <>

    <div className="d-flex flex-column bg-light p-5 border border-1 rounded-2  align-items-center justify-content-center">
      <h1>Form3</h1>
      <div>
        <Form.Group>
          <Form.Label>
            DOB <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={values.date}
            onBlur={handleBlur}
            onChange={handleChange}
          />{" "}
          {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}
        </Form.Group>
      </div>
      <div className="mb-3 ">
        <Form.Group>
          <Form.Label>
            Address <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            as={"textarea"}
            name="address"
            value={values.address}
            onBlur={handleBlur}
            onChange={handleChange}
          />{" "}
          {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
        </Form.Group>
      </div>
      <Form.Group className="mb-3">
        <Form.Check
          label="Agree to terms and conditions"
          name="condition"
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        {errors.condition && <p style={{ color: "red" }}>{errors.condition}</p>}
      </Form.Group>
    </div>
      <div className="d-flex gap-3">
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default Form_Step3;
