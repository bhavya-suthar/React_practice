import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  console.log("🚀 ~ Home ~ data:", data);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setData(res.data), console.log("🚀 ~ useEffect ~ res:", res);
      })
      .catch((err) => console.log("🚀 ~ useEffect ~ err:", err));
  }, []);
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100 vw-100">
        <h1>List Of Users</h1>
        <div className="w-75 rounded bg-white border shadow p-4 ">
        <div className="d-flex justify-content-end">
       <Link to="/create" className="btn btn-success">Add +</Link>
        </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((info, index) => (
                <tr key={index}>
                  <td>{info.id}</td>
                  <td>{info.name}</td>
                  <td>{info.username}</td>
                  <td>{info.email}</td>
                  <td>{info.phone}</td>
                  <td>{info.website}</td>
                  <td>
                    <button className="btn btn-sm btn-info me-2">Read</button>
                    <button className="btn btn-sm btn-primary me-2">Edit</button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;