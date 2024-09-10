import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const Update = () => {
    const [data, setData] = useState([]);
    console.log("🚀 ~ Update ~ data:", data)

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setValue(res.data), console.log("🚀 ~ useEffect ~ res:", res);
      })
      .catch((err) => console.log("🚀 ~ useEffect ~ err:", err));
  }, []);
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
  });
  console.log("🚀 ~ Update ~ value:", value)

  const navigate = useNavigate()
  const handleUpdate=(e)=>{
    e.preventDefault();
    axios
      .put("http://localhost:3000/users/"+id,value)
      .then((res) => {
         console.log("🚀 ~ useEffect ~ res:", res);
         navigate("/")
      })
      .catch((err) => console.log("🚀 ~ useEffect ~ err:", err));

  }
  return (
    <div className="d-flex justify-content-center align-items-center bg-light ">
    <div className="w-100 border bg-white shadow p-5 rounded">
      <h2>Update User</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-2 text-start">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control "
            placeholder="Enter Name"
            value={value.name}
            onChange={(e) => setValue({...value, name: e.target.value })}

          />
        </div>
        <div className="mb-2 text-start">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
            value={value.email}
            onChange={(e) => setValue({...value, email: e.target.value })}


          />
        </div>
        <div className="mb-3 text-start">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Enter Phone No."
            value={value.phone}
            onChange={(e) => setValue({...value, phone: e.target.value })}

          />
        </div>
        <button className="btn btn-success">Update</button>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </form>
    </div>
  </div>
  )
}

export default Update