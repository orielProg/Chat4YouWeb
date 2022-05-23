import ChooseFile from "./ChooseFile";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "../../Chat.css";

const UploadModal = props => {
    const handleClick = () =>{
        props.handleSubmission();
        props.onHide();
    }
    return (
        <Modal
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.show}
            onHide={props.onHide}
            contentClassName = "modal-dark"
        >
            <Modal.Header closeButton className="modal-dark modal-header-dark">
                <Modal.Title id="contained-modal-title-vcenter" className="modal-header-txt-dark">
                    {props.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-dark">
                {/*Here will insert different body for each purpose (photo,record,etc..)---ChooseFile*/}
                {/*<ChooseFile/>*/}
                {props.modalContent}
            </Modal.Body>
            <Modal.Footer className="modal-dark modal-footer-dark">
                <Button onClick={handleClick}>Upload</Button>
            </Modal.Footer>
        </Modal>

    );

};


export default UploadModal;