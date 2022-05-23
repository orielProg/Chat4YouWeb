import React, {useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import MainUploadButton from './MainUploadButton';
import './BottomPanel.css';
import {addNewMessage } from '../chat_utils';

const MessageSender = (props) => {
  const [textValue, setValue] = useState("");

  const onSubmit = async () => {
    if(textValue==="") return;
    const date = new Date();
    const newMessage = { type: "text", from: "me", date, content: textValue }
    await addNewMessage({newMessage,user : props.user,index : props.index, setActiveContactIndex : props.setActiveContactIndex, contacts : props.contacts,getContacts : props.getContacts});
    try {
      console.log("Trying to send signalr")
      //await props.connection.send('SendMessage', newMessage.content);
  }
  catch(e) {
      console.log(e);
  }
    setValue("");
  }

  const onEnterPress = event => {
    if(event.which===13) onSubmit();
  }
  
  return (
    <div id="bottomPanel">
    <InputGroup id="bottomInput">
      <MainUploadButton user={props.user} index={props.index} messagesData={props.messagesData} setMessagesData={props.setMessagesData} contacts={props.contacts} setContacts={props.setContacts} setActiveContactIndex={props.setActiveContactIndex} />
      <FormControl
      id = "bottomPanelText"
        value={textValue}
        placeholder="New message here..."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={e => setValue(e.target.value)}
        type="text"
        onKeyPress = {onEnterPress}
      />
      <Button onClick={() => { onSubmit(); }} variant="outline-secondary" id="senderButton">
        Send
      </Button>
    </InputGroup>
    </div>

  );
};
export default MessageSender;