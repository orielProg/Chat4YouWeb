import { Fragment } from "react";
import RecordModal from "./RecordModal";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import UploadModal from "./UploadModal";

const RecordUpload= props => {
    const [showModal, setModalShow] = useState(false);
    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    return (
        <Fragment>
            <Dropdown.Item onClick={handleShow} eventKey="3" className="col"><i className="bi bi-mic"></i>  Voice</Dropdown.Item>
            {/**RecordModal Here */}
            <UploadModal
                modalContent = {<RecordModal selectedFile = {props.selectedFile} changeHandler={props.changeHandler} fileType = {props.fileType} setFileType={props.setFileType} type={"voice"}/>}
                name={"Upload Record"}
                show={showModal}
                onHide={handleClose}
                handleSubmission={props.handleSubmission}
                
            />
        </Fragment>
    );
};
export default RecordUpload;