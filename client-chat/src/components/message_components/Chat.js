import { Row, Col ,Navbar,Container} from "react-bootstrap";
import "./Chat.css";
import "../Connect.css";
import ContactList from "./ContactList";
import MessagesBox from "./BubbleMessage/MessagesBox";
import MessageSender from "./BottomPanel/MessageSender";
import { Fragment, useState } from "react";
import Logo from "../background/Logo";
import TopBarLeft from "./TopBarLeft";
import TopBarRight from "./TopBarRight";
import { HubConnectionBuilder,HttpTransportType } from '@microsoft/signalr';
import {
  getLastMessage,
  getTimeAgo,
  isInContacts,
} from "./chat_utils";
import { useEffect } from "react";
import { app_data } from "../app_data";
import axios from "axios";
import avatar from "../../pictures/avatar.png"

const Chat = (props) => {

  const user = props.user;
  const [ connection, setConnection ] = useState(null);
  const [messages, setMessages] = useState([]);
  const [contacts, setContacts] = useState([]);
  console.log(contacts);
  const [activeContactIndex, setActiveContactIndex] = useState(null);
  const showContactChat = activeContactIndex === null ? false : true;

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
        .withUrl('http://localhost:7019/chatHub')
        .withAutomaticReconnect()
        .build();

    setConnection(newConnection);
}, []);


useEffect( async () => {
  if (connection) {
      connection.start()
          .then(async () => {
              console.log('Connected!');
              connection.invoke("registerConId",user);
              connection.on('ReceiveMessage', async message => {
                console.log("Got message from signalR")
                await getContacts();
              });
          })
          .catch(e => console.log('Connection failed: ', e));
  }
}, [connection]);

  const getContacts = async () => {
    await axios.get("http://localhost:7019/api/contacts",{ withCredentials: true }).then((data) => setContacts(data.data)).catch(err => console.log(err));
  }

  const getChat = async () => {
    if (activeContactIndex != null) {
      const id =  contacts[activeContactIndex].id;
      await axios.get(`http://localhost:7019/api/contacts/${id}/messages`,{ withCredentials: true }).then(data => setMessages(data.data)).catch(err => console.log(err));
    }
  }

  useEffect(async () => {
    await getContacts();
  },[])

  useEffect(async () => {
    await getChat();
  }, [activeContactIndex, contacts]);

  const handleAddingContact = async (username,server,name) => {

    if (isInContacts(username, contacts)) {
      alert("You already have this contact in your contacts list")
      return false;
    }
    if(username==="" || server === "" || name === ""){
      alert("One or more of the fields are empty");
      return false;
    }
    try{
      const ourServer = "localhost:7019";
      await axios.post(`http://${server}/api/invitations`,{from : user, to : username, server : ourServer});
      console.log("added 2");
      await axios.post("http://localhost:7019/api/contacts",{id : username, name , server},{ withCredentials: true });
      console.log("added");
      await getContacts();
      console.log(contacts);
      setActiveContactIndex(contacts.length);
    }
    catch(err){
      console.log("got in error double contact")
      console.log(err.response);
      if(err && err.response && err.response.status===401) alert("One of contact fields is invalid");
      else if(err && err.response && err.response.data) alert(err.response.data);
      else alert(err.message);
    }
    
    // const newContact = {
    //   username,
    //   displayName: app_data[username].displayName,
    //   messages: [],
    //   picture: app_data[username].picture,
    // };
    // app_data[user].contacts.push(newContact);
    // setContacts([...app_data[user].contacts]);
    // setActiveContactIndex(app_data[user].contacts.length - 1);
  };

  //refresh contacts (right side) every 30 seconds
  const [fakeCurrentDate, setFakeCurrentDate] = useState(new Date()); // default value can be anything you want

  useEffect(() => {
    setTimeout(() => {
      setFakeCurrentDate(new Date());
    }, 30000);
  }, [fakeCurrentDate]);

  return (
    <Fragment>
        <div id="outer-div">
        <div className="row row-eq-height upper-bar">
          <Col xs={4} className="padding-left-right-0">
            <Row>
              <TopBarLeft
                user={user}
                picture={avatar}
                displayName={user}
                handleAddingContact={handleAddingContact}
              />
            </Row>
          </Col>
          <Col xs={8}>
            <Row>
              <TopBarRight
                picture={
                  activeContactIndex !== null
                    ? avatar
                    : ""
                }
                displayName={
                  activeContactIndex !== null
                    ? contacts[activeContactIndex].name
                    : ""
                }
              />
            </Row>
          </Col>
        </div>
        <Row className="lower-row">
          <Col className="padding-left-right-0">
            <div  className="col grid-background ">
              <ol className="flex-col d-flex list-group contact-list scrollbar scrollbar-primary">
                {contacts
                  .slice(0)
                  .reverse()
                  .map((chat, index) => {
                    return (
                      <ContactList
                        name={chat.name}
                        lastMessage={chat.last}
                        timeAgo={getTimeAgo(chat.lastdate)}
                        picture={chat.picture}
                        key={index}
                        id={contacts.length - 1 - index}
                        activeContactIndex={activeContactIndex}
                        setActiveContactIndex={setActiveContactIndex}
                      />
                    );
                  })}
              </ol>
            </div>
          </Col>
          <Col xs={8} className="container-relative">
            {showContactChat && (
              <Fragment>
              <div id="messageBoxWrapper">
                <MessagesBox messages={messages} />
                </div>
                <MessageSender
                connection = {connection}
                messages={messages}
                setMessages={setMessages}
                contacts={contacts}
                setContacts={setContacts}
                index={activeContactIndex}
                setActiveContactIndex={setActiveContactIndex}
                user={user}
                getContacts = {getContacts}
              />
              </Fragment>
            )}
          </Col>
        </Row>
        </div>
    </Fragment>
    
  );
};
export default Chat;
