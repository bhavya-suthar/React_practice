import { ToastContainer } from "react-toastify";
import "./App.css";
import Form from "./Components/Form";
import { Link, Route, Routes } from "react-router-dom";
import MultiStep_Package from "./Components/Multistep_Package/MultiStep_Package";

function App() {
  function Home() {
    return (
      <div className="d-flex gap-3 m-3">
        <Link to="/multistep" className="btn btn-primary ">MultiStep_Props</Link>
        <Link to="/multistep_package" className="btn btn-primary ">MultiStep_Package</Link>
      </div>
    );
  }
  return (
    <>
    <Link to='/' className="btn btn-primary m-3">Back</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/multistep" element={<Form />} />
        <Route path="/multistep_package" element={<MultiStep_Package />} />
        <Route />
      </Routes>
      {/* <Form/> */}
      <ToastContainer />
    </>
  );
}

export default App;
