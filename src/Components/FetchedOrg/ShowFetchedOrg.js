import React from 'react'
import { Card } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import "./ShowFetchedOrg.css";
const ShowFetchedOrg = ({ orgs }) => {
 
  
  const{ name }= useParams()
  const history = useHistory()
  const goToOrgDetails = (activityName) => {
    const url = `registration/${activityName}`
    history.push(url)
  }

  return (
    <div className={`d-flex justify-content-center m-2`}>
      <Card style={{ width: '18rem', borderRadius: '1rem' }}>
        <Card.Img
          variant="top"
          src={`data:image/png;base64,${orgs.image.img}`}
        />
        
          <Card.Body style={{height:"5rem",textAlign: 'center' }} class = {`orgs-${orgs.background}`}>
            <Card.Title
              onClick={() => goToOrgDetails(orgs.name)}
              style={{ color: 'white', }}
            >
              {orgs.name}
            </Card.Title>
          </Card.Body>
       
      </Card>
    </div>
  )
}

export default ShowFetchedOrg
