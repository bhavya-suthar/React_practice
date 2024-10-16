import "./App.css";
import Login from "./Pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Registration from "./Pages/Registration";
import Dashboard from "./Pages/Dashboard";
import ForgotPassword from "./Pages/ForgotPassword";
import ChangePassword from "./Pages/ChangePassword";
import { useSelector } from "react-redux";

function App() {
  const loggedin = useSelector((state) => state?.user?.currentUser?.isLoggedIn); // Ensure you check the currentUser field
  console.log("🚀 ~ App ~ loggedin:", loggedin)
  return (
    <>
      <Routes>
        {/* {/ If logged in, user can access dashboard /} */}
        {loggedin ? (
          <>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* {/ Redirect login and registration to dashboard when logged in /} */}
            <Route path="/login" element={<Navigate to="/dashboard" />} />
            <Route path="/register" element={<Navigate to="/dashboard" />} />
          </>
        ) : (
          <>
            {/* {/ If not logged in, user can access login and registration pages /} */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            {/* {/ Redirect dashboard to login when not logged in /} */}
            <Route path="/dashboard" element={<Navigate to="/login" />} />
          </>
        )}
        {/* {/ Default route to catch undefined paths /} */}
        <Route path="*" element={<Navigate to={loggedin ? "/dashboard" : "/login"} />} />
      </Routes>
    </>

  );
}

export default App;
