import React, { useState } from "react";
import StepZilla from "react-stepzilla";
import Form_Step1 from "./Form_Step1";
import Form_Step2 from "./Form_Step2";
import Form_Step3 from "./Form_Step3";

const MultiStep_Package = () => {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    date: "",
    conPassword: "",
    gender: "male",
    country: "",
    city: "",
    condition: false,
    address: "",
  });
  console.log("🚀 ~ values:", values);

  const [errors, setErrors] = useState({});
  console.log("🚀 ~ errors:", errors);

  const validation = () => {
    let errors = {};
    console.log("🚀 ~ validation ~ errors:", errors);
    if (!values.fname) {
      errors.fname = "*First Name is Required!";
    }
    if (!values.lname) {
      errors.lname = "*Last Name is Required!";
    }
    if (!values.email) {
      errors.email = "*Email Name is Required!";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.password) {
      errors.password = "*Password is Required!";
    } else if (!values.password.length < 6) {
      errors.password = "Password must be 6 digits";
    }
    if (!values.conPassword) {
      errors.conPassword = "*Please Confirm Your Password!";
    } else if (values.conPassword !== values.password) {
      errors.conPassword = "*Password doesn't match";
    }
    if (!values.gender) {
      errors.gender = "*Gender is Required";
    }
    if (!values.date) {
      errors.date = "*Please Select Valid Date";
    }
    if (!values.address) {
      errors.address = "*Please Enter Your Address";
    }
    if (!values.city) {
      errors.city = "*Please Select Your City";
    }
    if (!values.country) {
      errors.country = "*Please Select Your Country";
    }
    if (!values.condition) {
      errors.condition = "*You must agree to the terms and conditions";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "condition") {
      setValues({ ...values, condition: checked });
    } else {
      setValues({ ...values, [name]: value });
    }
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validation(name, value);
    setErrors({
      ...errors,
      [name]: error[name],
    });
  };

  const handleSubmit = (e, values) => {
    e.preventDefault();
    const validationErrors = validation();
    if (Object.keys(validationErrors) === 0) {
      console.log("🚀 ~ handleSubmit ~ values:", values);
      setValues({
        fname: "",
        lname: "",
        email: "",
        password: "",
        date: "",
        conPassword: "",
        gender: "male",
        country: "",
        city: "",
        condition: false,
        address: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const steps = [
    {
      name: "info1",
      component: (
        <Form_Step1
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
        />
      ),
    },
    {
      name: "info2",
      component: (
        <Form_Step2
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
        />
      ),
    },
    {
      name: "info3",
      component: (
        <Form_Step3
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      ),
    },
  ];
  return (
    <div className="d-flex justify-content-center w-100">
      <StepZilla steps={steps} />
    </div>
  );
};

export default MultiStep_Package;
