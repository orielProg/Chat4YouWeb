import "../SingleMessage.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import './VideoMessage.css'

const VideoMessage = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <div className={"chat-" + props.from}>
        <div className={"video bubble " + props.from}>
          <Button variant="dark"  onClick={handleShow}><svg xmlns="http://www.w3.org/2000/svg" width="170" height="100" fill="currentColor" className="bi bi-play vid-fluid" viewBox="0 0 16 16">
          <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
        </svg></Button>
          <div className="time">{props.time}</div>
        </div>
      </div>
      <Modal size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose} contentClassName = "modal-dark">
      <Modal.Header closeButton className="modal-dark modal-header-dark"/>
        <Modal.Body className="modal-dark"><video controls className="img-fluid">
        <source src={props.video} type="video/mp4" />
      </video></Modal.Body>
      </Modal>
      </React.Fragment>
  );
};

export default VideoMessage;
