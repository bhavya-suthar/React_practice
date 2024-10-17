import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Model from "./Component/Model";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { MdPlaylistAdd } from "react-icons/md";

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <div className="d-flex justify-content-center my-5">
      <Button onClick={handleShow}>
        <MdPlaylistAdd style={{height:"40px",width:"40px"}}/>
      </Button>
      <Model show={show} setShow={setShow} />
    </div>
  );
}

export default App;
