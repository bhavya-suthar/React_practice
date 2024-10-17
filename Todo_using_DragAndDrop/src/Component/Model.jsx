import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/TodoSlice";

const Model = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todos);

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
        <Modal.Title>Edit Questions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="mb-3">
          <Form.Group className="d-flex gap-3">
            <Form.Control
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button onClick={handleSubmit} disabled={input === ""}>Add</Button>
          </Form.Group>
        </Form>
        <div>
          {todo.map((index,ele) => (
            <h6 className="border border-2 p-2 rounded" key={index}>{ele}</h6>
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
