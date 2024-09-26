import "./App.css";
import DashBoard from "./Components/DashBoard";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Privacy_policy from "./Pages/Privacy_policy";
import Registration from "./Pages/Registration";
import PrivateRoute from "./Route/PrivateRoute";
import NotFound from "./Pages/NotFound";
import PublicRoute from "./Route/PublicRoute";
import FPassword from "./Pages/FPassword";
import ResetPassword from "./Pages/ResetPassword";
import { useState } from "react";
import { useEffect } from "react";
// import './i18n'

function App() {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const tokenLocal = JSON.parse(localStorage.getItem("flag"))
    if(tokenLocal){
      setFlag(true)
    }else{
      setFlag(false)
    }
  }, []);
  return (
    <>
      {/* <Login/> */}
      {/* <Navbar/> */}

      <Routes>
        {flag ? (
          <>
            <Route path="*" element={<PrivateRoute element={<NotFound />} token={flag}/>} />
            <Route
              path="/about"
              element={<PrivateRoute element={<AboutUs />} token={flag}/>}
            />
            <Route
              path="/contact"
              element={<PrivateRoute element={<Contact />} token={flag} />}
            />
            <Route path="/faqs" element={<PrivateRoute element={<FAQ />} token={flag}/>} />
            <Route
              path="/dashboard"
              element={<PrivateRoute element={<DashBoard setFlag={setFlag}/>} token={flag}/>}
            />
            <Route
              path="/"
              element={<PrivateRoute element={<DashBoard setFlag={setFlag}/>} token={flag}/>}
            />
            <Route
              path="/privacypolicy"
              element={<PrivateRoute element={<Privacy_policy />} token={flag}/>}
            />
          </>
        ) : (
          <>
            <Route path="*" element={<PublicRoute element={<NotFound />} token={flag}/>} />
            <Route path="/" element={<PublicRoute element={<Login setFlag={setFlag}/>} token={flag}/>} />
            <Route
              path="/register"
              element={<PublicRoute element={<Registration />} token={flag}/>}
            />
            <Route
              path="/login"
              element={<PublicRoute element={<Login setFlag={setFlag}/>} token={flag}/>}
            />
            <Route
              path="/fpassword"
              element={<PublicRoute element={<FPassword />} />}
            />
            <Route
              path="/resetpassword"
              element={<PublicRoute element={<ResetPassword />} />}
            />
          </>
        )}

        {/* <Route path='*' element={<PrivateRoute element={<NotFound/>}/>}/>
      <Route path='/*' element={<PublicRoute element={<NotFound/>}/>}/>
      <Route path='/' element={<PublicRoute element={<Login/>}/>}/>
      <Route path='/register' element={<PublicRoute element={<Registration/>}/>}/>
      <Route path='/login' element={<PublicRoute element={<Login/>}/>}/>
      <Route path='/about' element={<PrivateRoute element={<AboutUs/>}/>}/>
      <Route path='/contact' element={<PrivateRoute element={<Contact/>}/>}/>
      <Route path='/faqs' element={<PrivateRoute element={<FAQ/>}/>}/>
      <Route path='/dashboard' element={<PrivateRoute element={<DashBoard/>}/>}/>
      <Route path='/' element={<PrivateRoute element={<DashBoard/>}/>}/>
      <Route path='/privacypolicy' element={<PrivateRoute element={<Privacy_policy/>}/>}/>
      <Route path='/fpassword' element={<PublicRoute element={<FPassword/>}/>}/>
      <Route path='/resetpassword' element={<PublicRoute element={<ResetPassword/>}/>}/> */}
      </Routes>
    </>
  );
}

export default App;
