
import { Fragment } from "react";

import { app_data } from "../app_data";
import axios from "axios";


export const getLastMessage = (data) => {
  if (data.length === 0) return "";
  const lastMessage = data[data.length - 1];
  if (lastMessage.type === "image")
    return (
      <div className = "contact-text">
        <i className="bi bi-image" /> Photo
      </div>
    );
  if (lastMessage.type === "voice")
    return (
      <div className = "contact-text">
        <i className="bi bi-mic-fill"></i> Voice
      </div>
    );
  if (lastMessage.type === "video")
    return (
      <div className = "contact-text">
        <i className="bi bi-play-fill"></i> Video
      </div>
    );
  if (lastMessage.type === "text") return <div className = "contact-text">{lastMessage.content}</div>;
};

export const getTimeAgo = (date) => {
  // if (data.length === 0) return "";
  // const date = data[data.length - 1].date;
  if(date===null) return "";
  date = new Date(date);
  const now = Math.round(new Date().getTime() / 1000);
  const dateUTC = Math.round(date.getTime() / 1000);
  let diff = now - dateUTC;
  const day = Math.round(diff / (24 * 3600));

  diff = Math.round(diff % (24 * 3600));
  const hour = Math.round(diff / 3600);

  diff = Math.round(diff % 3600);
  const minutes = Math.round(diff / 60);

  diff = Math.round(diff % 60);
  if (day && day > 1 && day < 7) return day + " days ago";
  if (day && day > 1 && day >= 7) {
    return dateToString(date);
  }
  if (day === 1) return day + " day ago";
  if (hour && hour > 1) return hour + " hours ago";
  if (hour === 1) return hour + " hour ago";
  if (minutes && minutes > 1) return minutes + " minutes ago";
  if (minutes === 1) return minutes + " minute ago";
  return "now";
};

export const dateToTime = (date) => {
  return (
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0")
  );
};

export const dateToString = (date) => {
  const month = date.getUTCMonth() + 1; //months from 1-12
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return (
    String(day).padStart(2, "0") +
    "/" +
    String(month).padStart(2, "0") +
    "/" +
    year
  );
};


// export const addNewMessage = async ({newMessage,user, index,setActiveContactIndex,setContacts,getContacts}) => {
//   app_data[user].contacts[index].messages.push(newMessage);
//   const targetContact = app_data[user].contacts[index];
//   const contactID = targetContact.username;

//   //move the contact to last on array
//   // app_data[user].contacts.sort((x, y) => {
//   //   return x == targetContact ? 1 : y == targetContact ? -1 : 0;
//   // });
//   // const otherUser =
//   //   app_data[user].contacts[app_data[user].contacts.length - 1].username;
  
//   // const chatExistOnTarget = app_data[otherUser].contacts.some(contact => contact.username===user);
//   // if(!chatExistOnTarget){
//   //   const me = {
//   //     username : user,
//   //     displayName: app_data[user].displayName,
//   //     messages: [],
//   //     picture: app_data[user].picture,
//   //   };
//   //   app_data[otherUser].contacts.push(me);
//   // }
//   // app_data[otherUser].contacts.forEach((contact, index) => {
//   //   if (contact.username === user) {
//   //     contact.messages.push({ ...newMessage, from: "you" });
//   //     app_data[otherUser].contacts.sort((x, y) => {
//   //       return x == contact ? 1 : y == contact ? -1 : 0;
//   //     });
//   //   }
//   // });
//   // setActiveContactIndex(app_data[user].contacts.length - 1);
//   // setContacts([...app_data[user].contacts]);
//   try{
//     await axios.post(`https://localhost:7019/api/contacts/${contactID}/messages`,{content : newMessage.content},{ withCredentials: true });
//     await axios.post("https://localhost:7019/api/transfer",{from : user, to : contactID, content : newMessage.content},{ withCredentials: true });
//     await getContacts();
//   }
//   catch (err) {
//     console.log(err);
//   }
// };

export const addNewMessage = async ({newMessage,user, index,setActiveContactIndex,contacts,getContacts}) => {
  const contactID = contacts[index].id;
  console.log(contacts);
  const hisServer = contacts[index].server;
  const ourServer = "localhost:7019";
  try{
    await axios.post(`http://localhost:7019/api/contacts/${contactID}/messages`,{content : newMessage.content, sent : true},{ withCredentials: true });
    await axios.post(`http://${hisServer}/api/transfer`,{from : user, to : contactID, content : newMessage.content},{ withCredentials: true });
    await getContacts();
    setActiveContactIndex(contacts.length-1);
  }
  catch (err) {
    console.log(err);
  }
};

export const isInContacts = (username,contacts) => {
  return contacts.some(contact => contact.username === username);
}
