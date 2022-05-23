import { useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import { FloatingLabel, Form } from "react-bootstrap";
import "./Chat.css";
import "./AddNewContact.css"

const AddNewContact = (props) => {
  const contactRef = useRef("");
  const serverRef = useRef("");
  const nameRef = useRef("");

  const handleClick = async () => {
    if (await props.handleAddingContact(contactRef.current.value,serverRef.current.value,nameRef.current.value) == false) {
      contactRef.current.value = "";
      return;
    }
    props.handleClose();
  };
  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={props.handleClose}
      contentClassName = "modal-dark"
    >
    
      <Modal.Header closeButton className="modal-dark modal-header-dark">
        <Modal.Title className="modal-header-txt-dark">
          Add new contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-dark">
        <FloatingLabel controlId="floatingName" label="Nickname" className = "modal-input-dark-txt" style = {{paddingBottom : "4%"}}>
          <Form.Control
            type="name"
            placeholder="name"
            ref={nameRef}
            className="modal-input-dark  input-txt"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingContact" label="Contact's identifier" className = "modal-input-dark-txt" style = {{paddingBottom : "4%"}}>
          <Form.Control
            type="contact"
            placeholder="contact"
            ref={contactRef}
            className="modal-input-dark  input-txt"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingServer" label="Server Address" className = "modal-input-dark-txt">
          <Form.Control
            type="server"
            placeholder="server"
            ref={serverRef}
            className="modal-input-dark  input-txt"
          />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer className="modal-dark modal-footer-dark">
        <Button variant="primary" onClick={handleClick}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNewContact;
