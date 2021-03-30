import React, { useContext } from 'react'
import { Card, Nav, Navbar } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router'
import { UserContext } from '../../App'
import img from '../Header/Group 1329.png'

const Registration = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
 
  const { id } = useParams()
 
  let payment = useHistory()
  const goToPayment = () => {
    payment.push('/volunteers')
  }
  const onSubmit = (data) => {
    
    fetch(`https://morning-hollows-81253.herokuapp.com/volunteers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        alert('Are you sure to send data')
        goToPayment()
        
      })
  }
  const { register, handleSubmit, watch, errors } = useForm()
  return (
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
       <a href="/home">  <img style={{ height: '3rem', width: '8rem' }} src={img} alt="" /> </a> 
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
              <b style={{ color: 'black' }}>{loggedInUser.name}</b>
            </Nav.Link>
            
              <Nav.Link style={{ color: 'black' }} href="/auth">
              <b style={{ color: 'black' }}>Admin</b>
            </Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="d-flex justify-content-center">
        <Card
          style={{
            width: '100%',
            height: '50%',
            alignSelf: 'center',
            borderRadius: '1rem',
            marginTop: '3rem',
          }}
        >
          <form style={{ padding: '2rem' }} onSubmit={handleSubmit(onSubmit)}>
            <input
              style={{
                height: '3rem',
                width: '80%',
                borderRadius: '5px',
                border: '1px solid gray',
                color: '#09015f',
                fontStyle: 'bold',
              }}
              name="name"
              ref={register}
              placeholder="Full name"
              autoComplete="off"
              required
            />
            <br /> <br />
            <input
              style={{
                height: '3rem',
                width: '80%',
                borderRadius: '5px',
                border: '1px solid gray',
                color: '#09015f',
                fontStyle: 'bold',
              }}
              defaultValue={loggedInUser.email}
              name="gmail"
              ref={register}
              placeholder="Gmail"
              autoComplete="off"
              required
            /> <br /> <br />
            <input
              style={{
                height: '3rem',
                width: '80%',
                borderRadius: '5px',
                border: '1px solid gray',
              }}
              name="Address"
              ref={register}
              placeholder="Your address"
              autoComplete="off"
              required
            />
            <br /> <br />
            <input
              style={{
                height: '3rem',
                width: '80%',
                borderRadius: '5px',
                border: '1px solid gray',
              }}
              name="phoneNumber"
              autoComplete="off"
              required
              ref={register}
              placeholder="Enter a valid phone number"
            />
            <br /> <br />
            <input
              style={{
                height: '3rem',
                width: '80%',
                borderRadius: '5px',
                border: '1px solid gray',
              }}
              name="age"
              ref={register}
              required
              autoComplete="off"
              placeholder="Enter your age"
            />
            <br /> <br />
            <input
              style={{
                height: '3rem',
                width: '80%',
                borderRadius: '5px',
                border: '1px solid gray',
                backgroundColor: '#03506f',
                color: 'white',
              }}
              value={id}
              name="interestedOrg"
              ref={register}
              required
            />
            <br /> <br />
            <select
              style={{
                height: '3rem',
                width: '80%',
                borderRadius: '5px',
                border: '1px solid gray',
              }}
              name="category"
              ref={register}
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br /> <br />
            <input
              style={{
                height: '3rem',
                width: '8rem',
                borderRadius: '20px',
                border: '1px solid #FF4B2B',
                backgroundColor: '#FF4B2B',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'transform 80ms ease-in',
              }}
              type="submit"
            />
          </form>
        </Card>
      </div>
    </div>
  )
}

export default Registration
