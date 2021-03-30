import React from 'react'
import { Card } from 'react-bootstrap'
import { useHistory} from 'react-router';
import "./ShowOrg.css";
const ShowOrg = ({ org }) => {
  const history = useHistory();
  const goToOrgDetails = (activityName) => {
    const url = `registration/${activityName}`
    history.push(url);
}
  return (
    <div className={`d-flex justify-content-center m-2`}>
      <Card style={{ width: '18rem', borderRadius:"1rem" }}>
        <Card.Img variant="top" src={org.activityImage} />
        <div class = {`org-${org.background}`}>
        <Card.Body>
         <Card.Title  onClick={()=> goToOrgDetails(org.activityName)} style={{color:"white", textAlign:"center"}} >{org.activityName}</Card.Title>  
        </Card.Body>
        </div>
      </Card>
    </div>
  )
}

export default ShowOrg
