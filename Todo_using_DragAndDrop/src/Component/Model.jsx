import { Button, Form, Modal } from "react-bootstrap";

const Model = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

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
      <Form>
            <Form.Group>
                <Form.Control type="text"/>
            </Form.Group>
      </Form>
        {/* <div><input className="w-full"/></div> */}
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
