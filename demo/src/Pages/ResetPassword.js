import React, { useState } from 'react'

const ResetPassword = () => {
  const [password,setPassword] = useState("")
  console.log("🚀 ~ ResetPassword ~ password:", password)
  const [conpassword,setConPassword] = useState("")
  console.log("🚀 ~ ResetPassword ~ conpassword:", conpassword)
  const handleClick = (e)=>{
    e.preventDefault()
    if(password === conpassword){
      console.log("done")
    }else{
      console.log("not done")
    }
  }
  return (
    <div>
    <h1>Reset Password</h1>
    <form
      className="container"
      onSubmit={handleClick}
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
             Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
           </div>
        <div
          className="mb-3"
          style={{ display: "flex", flexDirection: "column", width: "250px" }}
        >
          <label for="exampleInputPassword1" className="form-label">
           Confirm Password
          </label>
          <input
            type="password"
            name="password"
            value={conpassword}
            onChange={(e)=>setConPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
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

export default ResetPassword