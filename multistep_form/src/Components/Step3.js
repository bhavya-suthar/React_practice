import React from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Step3 = (props) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    back,
  } = props;

  const isButtonDisabled = !values.address || !values.condition;

  const notify =()=>{ toast.success('Your Form Submmited SuccessFully!!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });}

  return (
    <div className="d-flex flex-column bg-light p-5 w-50 border border-1 m-2 rounded-2  align-items-center justify-content-center">
      <h1>Form3</h1>
      <div>
        <Form.Group>
          <Form.Label>DOB  <span className="text-danger">*</span></Form.Label>
          <Form.Control 
            type="date"
            name="date"
            value={values.date}
            onBlur={handleBlur}
            onChange={handleChange}
          />          {errors.date && touched.date ? (
            <p className="text-danger w-75">{errors.date}</p>
          ) : null}
        </Form.Group>
      </div>
      <div className="mb-3 ">
        <Form.Group>
          <Form.Label>Address  <span className="text-danger">*</span></Form.Label>
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
          label="Agree to terms and conditions"
          name="condition"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.condition && touched.condition ? (
          <p className="text-danger w-75">{errors.condition}</p>
        ) : null}
      </Form.Group>
      <div className="d-flex gap-3">
        <Button onClick={back}>Back</Button>
        <Button onClick={()=>{handleSubmit();notify()}} disabled={isButtonDisabled}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Step3;
