import React, { useContext, useEffect, useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { UserContext } from '../../App'
import img from '../../Components/Header/Group 1329.png'
import ShowTable from './ShowTable'
const VolunteerList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  return (
    <div>
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img style={{ height: '3rem', width: '8rem' }} src={img} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            style={{
              border: '1px solid yellow',
              backgroundColor: 'yellow',
              opacity: '0.3',
            }}
            aria-controls="basic-navbar-nav"
          />

          <Navbar.Collapse className="mr-1 justify-content-end">
            <Nav>
              <Nav.Link style={{ color: 'black' }} href="/home">
                <b style={{ color: 'black' }}>Home</b>
              </Nav.Link>
              <Nav.Link style={{ color: 'black' }} href="/home">
                <b style={{ color: 'black' }}>Donation</b>
              </Nav.Link>
              <Nav.Link style={{ color: 'black' }} href="/home">
                <b style={{ color: 'black' }}>Blog</b>
              </Nav.Link>
              <Nav.Link style={{ color: 'black' }} href="/auth">
                <b style={{ color: 'black' }}>Log in</b>
              </Nav.Link>
              

              <Nav.Link style={{ color: 'black' }} href="/auth">
               {
                 loggedInUser.email === 0 ?
                 <b style={{ color: 'black' }}>Admin</b>
                 :
                 <p>{loggedInUser.name}</p>
               }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-2 mt-5">
            <div className="d-flex">
            <i
              class="fa fa-check-square-o"
              style={{ fontSize: '36px', marginRight: '10px' }}
            ></i>
            <a style={{color:"black", textDecoration:"none" }} href="/volunteers"> <b>Volunteer list</b> </a> <br/> <br/>
            </div>
            <div className="d-flex">
            <i
              class="far fa-clone"
              style={{ fontSize: '36px', marginRight: '10px' }}
            ></i>
            <a style={{color:"black", textDecoration:"none" }} href="/newOrganization"> <b>Add a new Organization</b> </a> <br/> <br/>
            </div>
            
          </div>
          

          <div style={{backgroundColor:"#d3dbfc", height:"100vh"}} className="col-md-10">
            <ShowTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VolunteerList
