import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'

const FPassword = () => {
  const initialValues = {
    email: "",
  };

  const fpasswordScema = Yup.object({
    email: Yup.string().email().required("Please enter your email!!!")
  })

    const navigate= useNavigate()
  const Email_env = process.env.REACT_APP_EMAIL;
  console.log("🚀 ~ FPassword ~ Email_env:", Email_env)

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: fpasswordScema,

      onSubmit: (values, action) => {
        if(Email_env === values.email){
          navigate("/resetpassword")
        }else{
            alert("Enter valid Email Id!!!")
        }
      },
    });

  return (
    <div>
    <h1>Forgot Password</h1>
    <form
      className="container"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div
          className="mb-3"
          style={{ display: "flex", flexDirection: "column", width: "250px" }}
        >
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />{
            errors.email && touched.email ? <p style={{color:"red"}}>{errors.email}</p>:null
          }
          
        </div>
        <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="submit" className="btn btn-warning" onClick={()=>navigate("/login")}>
          Cancel
        </button>
        </div>
      </div>
    </form>
  </div>    
  )
}

export default FPassword