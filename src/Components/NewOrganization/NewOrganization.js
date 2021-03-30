import React, { useContext, useState } from 'react'
import { Button, Form, Nav, Navbar } from 'react-bootstrap'
import { UserContext } from '../../App'
import img from '../../Components/Header/Group 1329.png'

const NewOrganization = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  const [file, setFile] = useState(null)
 

  const handleFileChange = (e) => {
    const newFile = e.target.files[0]
    setFile(newFile)
  }

  const [info, setInfo] = useState({})
  const handleBlur = (e) => {
    const newInfo = { ...info }
    
    newInfo[e.target.name] = e.target.value
    setInfo(newInfo)
  }

  const handleSubmit = () => {
    const formData = new FormData()
   
    formData.append('file', file)
    formData.append('name', info.name)
    formData.append('email', info.email)

    fetch('https://morning-hollows-81253.herokuapp.com/addOrg', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        
      })
      .catch((error) => {
        console.error(error)
      })
  }

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
              <Nav.Link style={{ color: 'black' }} href="/registration">
                <b style={{ color: 'black' }}>Donation</b>
              </Nav.Link>
              <Nav.Link style={{ color: 'black' }} href="/registration">
                <b style={{ color: 'black' }}>Blog</b>
              </Nav.Link>
              <Nav.Link style={{ color: 'black' }} href="/blogs">
                <b style={{ color: 'black' }}>Log in</b>
              </Nav.Link>
              <Nav.Link style={{ color: 'black' }} href="/auth">
                <b style={{ color: 'black' }}>{loggedInUser.name}</b>
              </Nav.Link>

              <Nav.Link style={{ color: 'black' }} href="/auth">
                <b style={{ color: 'black' }}>Admin</b>
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
              <a
                style={{ color: 'black', textDecoration: 'none' }}
                href="/volunteers"
              >
                <b>Volunteer list</b>
              </a>
              <br /> <br />
            </div>
            <div className="d-flex">
              <i
                class="far fa-clone"
                style={{ fontSize: '36px', marginRight: '10px' }}
              ></i>
              <a
                style={{ color: 'black', textDecoration: 'none' }}
                href="/newOrganization"
              >
                <b>Add a new Organization</b>
              </a>
              <br /> <br />
            </div>
          </div>

          <div
            style={{ backgroundColor: '#d3dbfc', height: '100vh' }}
            className="col-md-10"
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  onBlur={handleBlur}
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label>Name</label>
                <input
                  onBlur={handleBlur}
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Organization Name"
                />
              </div>
              
              <div className="form-group">
                <label>Upload a image</label>
                <input
                  
                  onChange={handleFileChange}
                  type="file"
                  className="form-control"
                  name="file"
                  placeholder="Upload a banner"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewOrganization
