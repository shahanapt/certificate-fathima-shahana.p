import React from 'react'
import './Header.css'
import {Container,Nav,Navbar,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';



const Header = () => {

return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="navcolor" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="hdfont">EDISONVALLEY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>  
          </Nav>
          <Nav>
          <Link to="/login"><Button variant="outline-success" style={{width: '100px'}}>Sign In</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )};



export default Header