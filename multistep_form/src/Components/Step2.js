import React from "react";
import { Button, Dropdown, Form } from "react-bootstrap"; // Ensure correct import

const Step2 = (props) => {
  const { values, handleChange, handleBlur, errors, touched, next, back } =
    props;
  return (
    <div className="d-flex flex-column bg-light border border-1 rounded-2 p-3 w-75 align-items-center justify-content-center">
      <h1>Form2</h1>
      <div className="d-flex gap-3 mb-3">
          <Form.Group>
            <Form.Label>Password</Form.Label>
            {/* <div style={{ position: "relative" }}> */}
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Create Your Password"
            />{" "}
            {/* <span
                style={{
                  position: "absolute",
                  top: "20%",
                  right: "10px",
                  transform: "tranlateY(-50%)",
                }}
                onClick={() => setHide(!hide)}
              >
                {hide ? (
                  <i class="fa-regular fa-eye-slash"></i>
                ) : (
                  <i class="fa-regular fa-eye"></i>
                )}
              </span>
            </div> */}
            {errors.password && touched.password ? (
              <p className="text-danger w-75">{errors.password}</p>
            ) : null}
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="conPassword"
              value={values.conPassword}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
            {errors.conPassword && touched.conPassword ? (
              <p className="text-danger w-75">{errors.conPassword}</p>
            ) : null}
          </Form.Group>
        </div>
      <Form.Group controlId="validationCustom01" className="w-0">
        <div className="d-flex gap-3">
          <Form.Label>Gender</Form.Label>
          <Form.Check
            type="radio"
            name="gender"
            value="male"
            checked={values.gender === "male"}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Form.Label>Male</Form.Label>
          <Form.Check
            type="radio"
            name="gender"
            value="female"
            checked={values.gender === "female"}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Form.Label>Female</Form.Label>
          {errors.gender && touched.gender ? (
            <p className="text-danger">{errors.gender}</p>
          ) : null}
        </div>
      </Form.Group>
      <div className="d-flex gap-3 m-2">
        <Dropdown>
          <Dropdown.Toggle>Country</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle>City</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {errors.city && touched.city ? (
          <p className="text-danger">{errors.city}</p>
        ) : null}
      </div>
      <div className="d-flex gap-4 ">
        <Button type="button" onClick={back}>
          Back
        </Button>
        <Button type="button" onClick={next}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Step2; // Ensure you export correctly
