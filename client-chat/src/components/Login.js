import { useRef, useState } from "react";
import "./Connect.css";
import { users } from "../user_details";
import { app_data } from "./app_data";
import { Form, FloatingLabel, FormControl } from "react-bootstrap";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import Logo from "./background/Logo";

const Login = (props) => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [validation, setValid] = useState([
    { valid: "", validFlag: false, inValidflag: false, feedback: "" },
  ]);
  const submitHandler = async (event) => {
    event.preventDefault();
    setValid("");
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    //check if user entered values.
    if (!password && !username) {
      setValid({
        valid: "invalid",
        validFlag: false,
        inValidflag: true,
        feedback: "Cannot accept empty fields",
      });
      return;
    }
    if(true) {
      setValid({ valid: "valid", validFlag: true, inValidflag: false });
      await axios
        .post(
          "http://localhost:7019/api/login",
          {username ,password},
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res);
          props.setUser(username);
        }).catch(err => {
          
          if(err && err.response && err.response.status===401) alert("Username or password are incorrect");
          else if(err && err.response && err.response.data) alert(err.response.data);
          else alert(err.message);
        });
      return;
    }
    setValid({
      valid: "invalid",
      validFlag: false,
      inValidflag: true,
      feedback: "Wrong user name or password",
    });
  };

  const onEnterPress = (event) => {
    if (event.which === 13) submitHandler(event);
  };

  return (
    <div id="enter" className="grid">
      <div className="col">
        <div className="row justify-content-md-center icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-lock"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
          </svg>
        </div>
        <div className="row mb icon">
          <p className="text-center fs-3">Login</p>
        </div>
        <form onKeyPress={onEnterPress}>
          <FloatingLabel
            className="mb-3 input-dark-txt"
            controlId="username"
            label="Username"
          >
            <Form.Control
              type="username"
              placeholder="username"
              ref={usernameRef}
              isValid={validation.validFlag}
              isInvalid={validation.inValidflag}
              className="input-dark-box"
            />
            <FormControl.Feedback type={validation.valid}>
              {validation.feedback}
            </FormControl.Feedback>
          </FloatingLabel>

          <FloatingLabel
            className="mb-3 input-dark-txt"
            controlId="passwordValidation"
            label="Confirm password"
          >
            <Form.Control
              type="password"
              placeholder="passwordVal"
              ref={passwordRef}
              isValid={validation.validFlag}
              isInvalid={validation.inValidflag}
              className="input-dark-box"
            />
            <FormControl.Feedback type={validation.valid}>
              {validation.feedback}
            </FormControl.Feedback>
          </FloatingLabel>
          <div className="row g-3 align-items-center padding">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitHandler}
            >
              Login
            </button>
          </div>
          <div className="row g-3 align-items-center">
            <p className="icon">
              &nbsp;&nbsp;Not registered?&nbsp;
              <a href="/register" className="link-primary">
                Click here
              </a>{" "}
              to register
            </p>
          </div>
          </form>
      </div>
    </div>
  );
};
export default Login;
