import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from './Group 1329.png'

const Header = () => {
  return (
    <div className="container">
      <Navbar  expand="lg">
        <Navbar.Brand href="#home">
          <img style={{ height: '3rem', width: '8rem' }} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
       
          style={{
            border: '1px solid yellow',
            backgroundColor: 'yellow',
            opacity: '0.3',
          }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse  className="mr-1 justify-content-end">
          <Nav >
            <Nav.Link style={{ color: 'black' }} href="/home">
              <b style={{color:"white"}}>Home</b>
            </Nav.Link>
            <Nav.Link style={{ color: 'black' }} href="/registration">
              <b style={{color:"white"}}>Volunteer</b>
            </Nav.Link>
            <Nav.Link style={{ color: 'black' }} href="/newOrganization">
              <b style={{color:"white"}}>Add One Organization</b>
            </Nav.Link>
            <Nav.Link style={{ color: 'black' }} href="/auth">
              <b style={{color:"white"}}>Log in</b>
            </Nav.Link>
            <Nav.Link style={{ color: 'black' }} href="/auth">
              <b style={{color:"white"}}>Admin</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
