import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../Redux/UserSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector(state=>state.user.currentUser)
  console.log("🚀 ~ Dashboard ~ users:", users)
  return (
    <>
    <div className="d-flex justify-content-between">
      <h3 className="m-3">Dashboard</h3>
      <Link to="/login" onClick={() => dispatch(logoutUser())}>
        <button className="bg-primary border border-0 p-2 m-2 rounded-2 text-white">
          Logout
        </button>
        </Link>
    </div>
        {<h3 className="d-flex justify-content-center align-items-center">Hello! {users.name}</h3>     }
    </>
  );
};

export default Dashboard;
