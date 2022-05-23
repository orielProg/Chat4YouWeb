import { useState } from "react";
import { Form } from "react-bootstrap";
import "../../../Connect.css"
const ChooseFile = props => {

    const fileUploadHandler = (event) => {
        props.setFileType(props.type);
        props.changeHandler(event);
    }
    
    return (
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Control accept={props.accept} type="file" className="input-dark-box" onChange={fileUploadHandler}/>
        </Form.Group>
    );
};

export default ChooseFile;