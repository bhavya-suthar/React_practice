import React from "react";
import { Button, Form } from "react-bootstrap";

const Step3 = (props) => {
  const { values, handleChange, handleBlur,handleSubmit, errors, touched, next, back } =
    props;

  return (
    <div className="d-flex flex-column bg-light p-3 border border-1 m-2 rounded-2 w-75 align-items-center justify-content-center">
      <div className="mb-3 ">
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            as={"textarea"}
            name="address"
            value={values.address}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.address && touched.address ? (
            <p className="text-danger w-75">{errors.address}</p>
          ) : null}
        </Form.Group>
      </div>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <div className="d-flex gap-3">
        <Button onClick={back}>Back</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default Step3;
