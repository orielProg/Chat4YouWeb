import "../SingleMessage.css";

const VoiceMessage = (props) => {

  return (
      <div className={"chat-" + props.from}>
        <div className={"bubble " + props.from}>
        <audio controls className="audio-player" >
        <source src={props.audio} type="audio/mpeg" />
      </audio>
          <div className="time">{props.time}</div>
        </div>
      </div>

  );
};

export default VoiceMessage;
