import React, { useState } from 'react'

const FPassword = () => {
  const [email,setEmail] = useState("")
  console.log("🚀 ~ FPassword ~ email:", email)
  return (
    <div>
    <h1>Forgot Password</h1>
    <form
      className="container"
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
            value={email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>setEmail(e.target.value)}
          />
          
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  </div>    
  )
}

export default FPassword