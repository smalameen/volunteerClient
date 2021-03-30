import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Header/Group 1329.png'
const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#edeef7',
          color: 'black',
          boxShadow: '5px 5px 5px 5px #888888',
          
        }}
      >
        <div className="container">
          <div className="row">
            <Link style={{ color: 'white' }} to="/home">
              {' '}
              <div className="col-md-3">
                <img
                  style={{ height: '3rem', width: '8rem' }}
                  src={logo}
                  alt=""
                />
              </div>{' '}
            </Link>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-3 mt-sm-2">
                  <h5>Need Help?</h5>
                  <small> Live Chat</small> <br />
                  <small> Customer Care</small> <br />
                  <small> Gift Order</small> <br />
                  <small> Send your feedback</small>
                </div>
                <div className="col-md-3  mt-sm-2">
                  <h5>Our Digital Resources</h5>
                  <small>Articles</small> <br />
                  <small> E-book</small>
                </div>

                <div className="col-md-3">
                  <h5>Contact With us</h5>
                  <div className="d-flex justify-content-md-between">
                  <i class="fa fa-instagram" style={{fontSize:"20px"}}></i>                    
                  <i class="fa fa-linkedin-square" style={{fontSize:"20px"}}></i>                    
                  <i class="fa fa-whatsapp" style={{fontSize:"20px"}}></i>                    
                  <i class="fa fa-facebook" style={{fontSize:"20px"}}></i>  
                  <i class="fa fa-youtube-play" style={{fontSize:"20px"}}></i>                   
                  </div>
                </div>
                <div className="col-md-3">
                  <h5>Join Our news letter</h5>
                  <small>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorem commodi asperiores odio, nam distinctio soluta iste
                    repellendus id repellat optio.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6 style={{ marginTop: '5rem' }} className="text-center">
          All right reserved by @smalamin
        </h6>
      </div>
    </div>
  )
}

export default Footer
