import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton'
import DropdownButton from 'react-bootstrap/DropdownButton'
import PhotoModal from './UploadModals/UploadModal';
import VideoUpload from './UploadModals/VideoUpload';
import PhotoUpload from './UploadModals/PhotoUpload';
import RecordUpload from './UploadModals/RecordUpload';
import PhotoVidModal from './UploadModals/UploadModal';
import ChooseFile from './UploadModals/ChooseFile';
import LocationUpload from './UploadModals/LocationUpload';
import { useState } from 'react';
import { getLastMessage,app_data, addNewMessage } from '../chat_utils'
import './BottomPanel.css'

const MainUploadButton = props => {
    const user = props.user;
    const [selectedFile, setSelectedFile] = useState();
    const [fileType, setFileType] = useState(null);

    const changeHandlerAudio = audio =>{
        setSelectedFile(audio);
    }

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    
    };

    const handleSubmission = () => {
        createMessage();
        setFileType(null);
        setSelectedFile(null);
    };

    const createMessage = () => {
        {/**It will create a message according to the data it gets from upload choice */ }
        const newMessage = { type: fileType, from: "me", date : new Date(), content: URL.createObjectURL(selectedFile) };
        addNewMessage({newMessage,user : props.user,index : props.index, setActiveContactIndex : props.setActiveContactIndex, setContacts : props.setContacts});
        {/**for now we support only in 3 type of messages from special share option. */ }
    }

    return (
        <DropdownButton 
            title={<i className="bi bi-paperclip"></i>}
            drop="up"
            variant="outline-secondary" className="col-1 p-0" id = "senderButton">
            {/**Need to change display to fles, the dropdown buttons display */}
            {/**Enter each modal buttons one by one, using components */}
            <PhotoUpload changeHandler={changeHandler} handleSubmission={handleSubmission} setFileType={setFileType} />
            <VideoUpload changeHandler={changeHandler} handleSubmission={handleSubmission} setFileType={setFileType} />
            <RecordUpload fileType = {fileType} selectedFile = {selectedFile} changeHandler={changeHandlerAudio} handleSubmission={handleSubmission} setFileType={setFileType} />
            <LocationUpload />
        </DropdownButton>
    );
};
export default MainUploadButton;