import { useRef, useState } from 'react';
import './Connect.css'
import { app_data } from './app_data'
import avatar from '../pictures/avatar.png';
import { Form, FloatingLabel, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = (props) => {
    const [picture, setPicture] = useState(null);
    const usernameRef = useRef();
    const displayNameRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [userValid, setValid] = useState([{ valid: "", validFlag: false, invalidFlag: false, feedback: "" }]);
    const [passValid, setPassValid] = useState([{ valid: "", validFlag: false, invalidFlag: false, feedback: "" }]);
    const [passConfValid, setPassConfValid] = useState([{ valid: "", validFlag: false, invalidFlag: false, feedback: "" }]);
    const [nickValid, setNickValid] = useState([{ valid: "", validFlag: false, invalidFlag: false, feedback: "" }]);
    const onPictureUpload = event => {
        setPicture(event.target.files[0]);
    }
    const submitHandler = async (event) => {
        event.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        const displayName = displayNameRef.current.value;
        const userPicture = picture ? URL.createObjectURL(picture) : avatar;
        //first after every click fresh all fields.
        setValid({valid : ""});
        setPassValid({valid :""});
        setNickValid({valid : ""});
        //flag to check if one of the statments fails --> we dont want to send and make new user.
        let flag = true;
        if (!username) {
            setValid({valid:"invalid",validFlag: false,invalidFlag: true, feedback:"Please choose a username"});
        }
        if (!password) {
            flag = false;
            setPassValid({valid:"invalid",invalidFlag:true,validFlag:false,feedback:"Please choose a password"});
        }
        if (password !== confirmPassword) {
            flag = false;
            setPassConfValid({valid:"invalid",invalidFlag:true,validFlag:false,feedback:"Please confrim your password"});

        }
        if (!displayName) {
            flag = false;
            setNickValid({ valid: "invalid", validFlag: false, invalidFlag: true, feedback: "Please choose a nickname" });
        }
        if(password.length<6){
            flag = false;
            setPassValid({valid:"invalid",invalidFlag:true,validFlag:false,feedback:"Please choose password with at least 6 characters"});
        }
        if(password.length>12){
            flag = false;
            setPassValid({valid:"invalid",invalidFlag:true,validFlag:false,feedback:"Please choose password with maximum 11 characters"});
        }
        if (flag) {
            //set all fields to be valids.
            setValid("valid");
            setPassValid("valid");
            setNickValid("valid");
            setPassConfValid("valid");
            await axios
        .post(
          "http://localhost:7019/api/register",
          {username ,password,name : displayName},
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res);
          props.setUser(username);
        }).catch(err => {
            if(err && err.response && err.response.data==="Username already exists"){
                flag = false;
            setValid({valid:"invalid", validFlag:false,invalidFlag:true,feedback:"Username already in use"});
            }
            else alert(err.message);
        });
      return;
        }
    }
    return (<div id="enter" className="grid">
        <div className="col">
            <div className="row justify-content-md-center icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
            </div>
            <div className="row mb icon">
                <p className="text-center fs-3">Register</p>
            </div>
            <FloatingLabel hasValiditation className={"mb-3 input-dark-txt is-" + userValid} controlId="username" label="Username">
                <Form.Control className="input-dark-box" type="username" placeholder="username" ref={usernameRef} isInvalid={userValid.invalidFlag} isValid={userValid.validFlag} />
                <FormControl.Feedback type={userValid.valid}>
                    {userValid.feedback}
                </FormControl.Feedback>
            </FloatingLabel>

            <FloatingLabel className="mb-3  input-dark-txt" controlId="displayName" label="Display name">
                <Form.Control className="input-dark-box" type="displayName" placeholder="displayName" ref={displayNameRef} isInvalid={nickValid.invalidFlag} isValid={nickValid.validFlag} />
                <FormControl.Feedback type={nickValid.valid}>
                    {nickValid.feedback}
                </FormControl.Feedback>
            </FloatingLabel>


            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className = "icon">Upload profile picture</Form.Label>
                <Form.Control className="input-dark-box"  accept = "image/*" type="file" onChange={onPictureUpload} />
            </Form.Group>
            <FloatingLabel className="mb-3  input-dark-txt" controlId="password" label="Password">
                <Form.Control className="input-dark-box" type="password" placeholder="password" ref={passwordRef} isInvalid={passValid.invalidFlag} isValid={passValid.validFlag} />
                <FormControl.Feedback type={passValid.valid}>
                    {passValid.feedback}
                </FormControl.Feedback>
            </FloatingLabel>

            <FloatingLabel className={"mb-3  input-dark-txt is-" + passValid} controlId="passwordValidation" label="Confirm password">
                <Form.Control className="input-dark-box" type="password" placeholder="passwordVal" ref={confirmPasswordRef} isInvalid={passConfValid.invalidFlag} isValid={passConfValid.validFlag} />
                <FormControl.Feedback type={passConfValid.valid}>
                    {passConfValid.feedback}
                </FormControl.Feedback>
            </FloatingLabel>
            <div className="row g-3 align-items-center padding">
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={submitHandler}
                >
                    Sign up
                </button>
            </div>
            <div className="row g-3 align-items-center">
                <p className = "icon">
                    &nbsp;&nbsp;Already registered?&nbsp;
                    <a href="/login" className="link-primary">
                        Click here
                    </a>{" "}
                    to login
                </p>
            </div>
        </div>
    </div>
    );
};
export default Register;
