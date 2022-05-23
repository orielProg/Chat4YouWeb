import "../SingleMessage.css";

const TextMessage = (props) => {

  return (
      <div className={"chat-" + props.from}>
        <div className={"bubble " + props.from}>
          <p className = "text-msg">{props.text}</p>
          <div className="time">{props.time}</div>
        </div>
      </div>

  );
};

export default TextMessage;
