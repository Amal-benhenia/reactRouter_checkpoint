import React from "react";
import { useParams ,Link} from "react-router-dom";
import { Card , Button } from "react-bootstrap";
export default function Trailer({movies}) {
    const {id}=useParams();
    const mov=movies.find(el=> el.id===id)
    return(
    <div className='moviedetails'>
        <Card style={{ width: '18rem' }}> 
  <Card.Img variant="top"/>
        <Card.Body>
    <Card.Title>Title:{mov.title}</Card.Title>
        <Card.Text>
    Description : {mov.Description}
        </Card.Text>
    <Card.Img variant="top" src={mov.img} />
    <Link to={"/"}><Button variant="primary">Home</Button></Link>
        </Card.Body>
</Card>
<iframe   src={mov.trailer} title='trailer'>   </iframe>
    </div>)
}