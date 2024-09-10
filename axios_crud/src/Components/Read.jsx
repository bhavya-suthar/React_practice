import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  console.log("🚀 ~ Read ~ data:", data)

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setData(res.data), console.log("🚀 ~ useEffect ~ res:", res);
      })
      .catch((err) => console.log("🚀 ~ useEffect ~ err:", err));
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-light">
        <div className="border bg-white shadow p-5 rounded">
          <h3>Detail Of User</h3>
          <form>
            <div className="mb-2 text-start pt-2">
              <strong>Name: {data.name}</strong>
            </div>
            <div className="mb-2 text-start">
              <strong>Email: {data.email}</strong>
            </div>
            <div className="mb-2 text-start">
              <strong>Phone: {data.phone}</strong>
            </div>
            <Link to={`/update/${id}`} className="btn btn-success mt-3">
              Edit
            </Link>
            <Link to="/" className="btn btn-primary ms-3 mt-3">
              Back
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Read;
