import React from "react";
import { Button, Dropdown, Form } from "react-bootstrap"; // Ensure correct import

const Step2 = (props) => {
  const { values, handleChange, handleBlur, errors, touched, next, back } =
    props;
    const isButtonDisabled = !values.password || !values.conPassword || !values.gender || !values.country || !values.city;

  return (
    <div className="d-flex flex-column bg-light border border-1 rounded-2 p-5 align-items-center justify-content-center">
      <h1>Form2</h1>
      <div className="d-flex gap-3 mb-3">
        <Form.Group>
          <Form.Label>Password  <span className="text-danger">*</span></Form.Label>
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
          <Form.Label>Confirm Password  <span className="text-danger">*</span></Form.Label>
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
          <Form.Label>Gender <span className="text-danger">*</span></Form.Label>
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
        <div>
          <Form.Group className="mb-3 w-35 text-start d-flex justify-content-center gap-2">
            <Form.Select
              aria-label="Default select example"
              value={values.country}
              name="country"
              // onChange={(e) => { selectCity(e.target.value);  handleChange(e) }}

              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>
                Select Country <span style={{ color: "red" }}>*</span>
              </option>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="US">US</option>
              {/* {countries.map((ele, index)=>(
                        <option key={index}>{ele.name}</option>
                    ))} */}
            </Form.Select>
            {errors.country && touched.country ? (
              <p style={{ color: "red" }}>{errors.country}</p>
            ) : null}

            <Form.Select
              aria-label=""
              value={values.city}
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>
                Select City <span style={{ color: "red" }}>*</span>
              </option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Sydney">Sydney</option>
              <option value="London">London</option>
              {/* {
                        fromCity.length ? 
                        fromCity.map((city, i)=>(
                            <option key={i}>{city}</option>
                        ))
                        :
                        <option>No City found</option>
                    } */}
            </Form.Select>
            {errors.city && touched.city ? (
              <p style={{ color: "red" }}>{errors.city}</p>
            ) : null}
          </Form.Group>
        </div>
      </div>
      <div className="d-flex gap-4 ">
        <Button type="button" onClick={back}>
          Back
        </Button>
        <Button type="button" onClick={next} disabled={isButtonDisabled}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step2; // Ensure you export correctly
