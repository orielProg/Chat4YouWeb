import { useEffect,useState } from "react";
import avatar from '../../pictures/avatar.png';
import './Chat.css'
const ContactList = (props) => {
  const[activeState,setActiveState] = useState("")
  useEffect(() => {
    if (props.activeContactIndex === props.id) {
      setActiveState(" act")
    }
    else setActiveState("")
  }, [props.activeContactIndex,props.id]);

  const clickHandler = () => {
    props.setActiveContactIndex(props.id);
  };

  
console.log(props.lastMessage);
  return (
    <li
      className={
        "p-2 list-group-item d-flex justify-content-between align-items-start hover-shadow contact-itm" +
        activeState
      }
      onClick={clickHandler}
    >
      <div className = "left-contact-img"><img src={props.picture ? props.picture : avatar} className="img-fluid rounded-circle"/></div>
      <div className="ms-2 me-auto">
        <div className="fw-bold contact-text"> {props.name} </div>
        <div className = "contact-text">{props.lastMessage}</div>
      </div>
      <span className="badge bg-dark rounded-pill">
        
        {props.lastMessage ? props.timeAgo : ""}
      </span>
    </li>
  );
};

export default ContactList;
