import { Fragment } from "react";
import React from "react";
import { Dropdown } from "react-bootstrap";
import UploadModal from "./UploadModal";
import ChooseFile from "./ChooseFile";
const UploadPhoto = props => {
    const [modalShow, setModalShow] = React.useState(false);
    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    return (
        <Fragment>
            <Dropdown.Item onClick={handleShow} eventKey="1" className="col"><i className="bi bi-image"></i>  Picture</Dropdown.Item>
            <UploadModal
                modalContent={<ChooseFile accept = "image/*" changeHandler = {props.changeHandler} setFileType = {props.setFileType} type = {"image"}/>}
                name={"Upload Photo"}
                show={modalShow}
                onHide={handleClose}

                 handleSubmission = {props.handleSubmission}
            />
        </Fragment>
    )
};
export default UploadPhoto;