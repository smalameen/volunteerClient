import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import ShowFetchedOrg from './ShowFetchedOrg'
const FetchedOrg = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://morning-hollows-81253.herokuapp.com/newOrg')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
  
  return (
    <div className="container">
      
      <h3 className="text-center m-3">New Organizations</h3>
      <div className="text-center m-3">
      {
        data.length === 0 && <i class="fa fa-spinner fa-spin" style={{fontSize:"44px"}}></i>
      }
      </div>
     <div className="row d-flex justify-content-center">
     {data.map((orgs) => (
        <ShowFetchedOrg key={orgs._id} orgs={orgs} />
      ))}
     </div>
    </div>
  )
}

export default FetchedOrg
