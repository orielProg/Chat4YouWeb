import { Fragment, useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import "./Upload.css";
import audio from '../../../../audio/audio.mp3'
const RecordModal = (props) => {
  const [showButton, setShowButton] = useState(true);
  const [record, setRecord] = useState(null);
  const handleStart = () => setShowButton(true);
  const handleStop = () => setShowButton(false);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  var recorder = null;

  const stopRecording = () => {
    window.recorder.stop();
    handleStart();
  };
    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((pervTime) => pervTime + 10);
        }, 10);
      }
      else {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);

  const Recording = async () => {
    let chunks = [];
    // let recorder;
    try {
      //wait for the stream promise to resolve
      let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      recorder = new MediaRecorder(stream);
      window.recorder = recorder;
      recorder.ondataavailable = (e) => {
        chunks.push(e.data);
        if (recorder.state === "inactive") {
          const blob = new Blob(chunks, { type: "audio/webm" });
          props.setFileType("voice");
          setRecord(blob);
          props.changeHandler(blob);
          stream.getTracks().forEach((t) => t.stop());
        }
      };
      recorder.start(1000);

      // setTimeout(() => {
      //   recorder.stop();
      // }, 2000);
    } catch (e) {
    }
  };

  const recordPreview = (
    <Fragment>
      {props.fileType === "voice" && record && (
        <Row className="mb3" style={{ "paddingTop": "2%" }}><audio controls className="audio-player">
          <source src={URL.createObjectURL(record)} type="audio/mpeg" />
        </audio></Row>
      )}
    </Fragment>
  );

  return (
    <Fragment>
      {showButton && (
        <Button
          variant="dark"
          id=""
          className="notRec recordButton"
          onClick={() => {
            handleStop();
            setRecord(null);
            setRunning(true);
            //Timer();
            Recording();
          }}
          type="submit center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
          </svg>
          {/*<i className="bi bi-record-circle fa-2x "></i>*/}
        </Button>
      )}
      {recordPreview}
      {!showButton && (
        <Button
          className="Rec recordButton"
          onClick={() => {
            stopRecording();
            setRunning(false);
          }}
          type="submit center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-stop-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />
          </svg>
        </Button>
      )}
      <Fragment>
        <div className="numbers d-flex justify-content-center text-info">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
      </Fragment>
    </Fragment>

  );
};
export default RecordModal;
