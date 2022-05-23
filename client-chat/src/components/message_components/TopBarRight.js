import { Fragment } from "react";
import "./TopBarRight.css";
import "./Chat.css";

const TopBarRight = (props) => {
  return (
    <div
      className={
        "p-2 d-flex justify-content-between align-items-center hover-shadow"
      }
    >
      <div className="contact-img">
        <img src={props.picture} className="img-fluid rounded-circle" />
      </div>
      <div className="ms-2 me-auto">
        <div className="fw-bold contact-text"> {props.displayName} </div>
      </div>
    </div>
  );
};

export default TopBarRight;
