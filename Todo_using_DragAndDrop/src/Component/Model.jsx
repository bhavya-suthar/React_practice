import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  closeExpand,
  deleteTodo,
  expandCheck,
  reorderTodo,
} from "../Redux/TodoSlice";
import { AiTwotoneDelete } from "react-icons/ai";
import { RiDraggable } from "react-icons/ri";
import { Link } from "react-router-dom";
import DragListView from "react-drag-listview";

const Model = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { todos, isExpand } = useSelector((state) => state.todos);

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

  const onDragEnd = (fromIndex, toIndex) => {
    if (toIndex < 0 || toIndex >= todos.length) return; // Prevent out-of-bounds dragging
    dispatch(reorderTodo({ startIndex: fromIndex, endIndex: toIndex }));
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

            <Button
              className="bg-success text-white"
              onClick={handleSubmit}
              disabled={input === ""}
            >
              Save
            </Button>
            <Button
              className="bg-danger text-white"
              onClick={() => setInput("")}
              variant="warning"
            >
              Cancel
            </Button>
            {/* </Form.Control> */}
          </Form.Group>
        </Form>
        <DragListView
          onDragEnd={onDragEnd}
          nodeSelector="div.todo-item"
          handleSelector="h6"
          // axis="y"
          // onDrag={eventLogger}
          // onStop={(e, data) => handleDrag(e, data, index)}
        >
          <div>
            {todos.map((ele) => (
              <>
                <div
                  className="todo-item d-flex justify-content-between flex-column border border-2 p-2 rounded mb-2"
                  style={{ cursor: "pointer" }}
                  key={ele.id}
                >
                  <h6 className="d-flex justify-content-between m-0">
                    <div className="d-flex gap-2">
                      <RiDraggable
                        style={{
                          width: "25px",
                          height: "25px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      />
                      {ele.text}
                    </div>
                    <div>
                      <AiTwotoneDelete
                        style={{ height: "20px", width: "20px" }}
                        onClick={() => dispatch(expandCheck(ele.id))}
                      />
                    </div>
                  </h6>
                  {ele.isExpand && (
                    <div className="m-0">
                      <span>Are you sure you want to delete this Task?</span>
                      <br />
                      <span>This Task will be permanently lost.</span>
                      <div className="d-flex justify-content-between">
                        <Link
                          className="text-success"
                          onClick={() => dispatch(deleteTodo(ele.id))}
                        >
                          Yes,Delete Task
                        </Link>
                        <Link
                          className="text-danger"
                          onClick={() => dispatch(closeExpand(ele.id))}
                        >
                          No,keep task
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ))}
          </div>
        </DragListView>
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
