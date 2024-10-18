import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, closeExpand, deleteTodo, expandCheck } from "../Redux/TodoSlice";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Model = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const {todos,isExpand} = useSelector((state) => state.todos);


  // const [expand, setExpand] = useState(false);
  // console.log("🚀 ~ Model ~ expand:", expand);

  // const handleExpand = () => {
  //   setExpand(true);
  // };

  const handleSubmit = () => {
    console.log("🚀 ~ Model ~ input:", input);
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Tasks</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="mb-3">
          <Form.Group className="d-flex gap-3 align-items-center">
          {/* border border-2 rounded-2 p-1 */}
            <Form.Control
            className="border-2"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <Button className="bg-success text-white" onClick={handleSubmit} disabled={input === ""}>
              Save
            </Button>
            <Button className="bg-danger text-white" onClick={()=>setInput("")} variant="warning">
              Cancel
            </Button>
            {/* </Form.Control> */}
          </Form.Group>
        </Form>
        <div>
          {todos.map((ele) => (
            <div
              className=" d-flex justify-content-between flex-column border border-2 p-2 rounded mb-2"
              key={ele.id}
            >
              <h6 className="d-flex justify-content-between">
                {ele.text}
                <AiTwotoneDelete
                  style={{ height: "20px", width: "20px" }}
                  onClick={()=>dispatch(expandCheck(ele.id))}
                />
              </h6>
              {ele.isExpand && (
                <div className="mb-0">
                  <span>Are you sure you want to delete this Task?</span>
                  <br />
                  <span>This Task will be permanently lost.</span>
                  <div className="d-flex justify-content-between">
                    <Link className="text-success" onClick={()=>dispatch(deleteTodo(ele.id))}>Yes,Delete Task</Link>
                    <Link
                      className="text-danger"
                      onClick={()=>dispatch(closeExpand(ele.id))}
                    >
                      No,keep task
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Model;
