import { Navbar, Container } from "react-bootstrap";
import pic from './chatLogo.jpg'
import '../message_components/Chat.css'
import ratePic from './ratePic.png'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const Logo = (props) => {
  return (
    <Navbar className="navbar-expand-lg " bg="dark" variant="dark">
      <Container className="logo-container col-12">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={pic}
            width="100"
            height="70"
            id="logoImage"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
      </Container>
      <Navbar.Brand className="text-center col-2" href="http://localhost:5029/">
        {/**  <img
        alt=""
        src={ratePic}
        width="100"
        height="60"
        className="d-inline-block align-top"
        ></img>*/}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        Rate Us!
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      </Navbar.Brand>
    </Navbar>
  );
};
export default Logo;