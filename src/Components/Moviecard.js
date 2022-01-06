import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from "react-router-dom";
import Rate from './rate'

export default function Moviecard({movie}){
  
    console.log(movie)
    return (
        <div className='cardContainer'>
    <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={movie?.imgURL} />
  <Card.Body>
    <Link to= {`/Trailer/${movie?.id}`}> <Card.Title>{movie?.title}</Card.Title></Link>
    <Card.Text>
      {movie?.description}
    </Card.Text>
    <Rate rate={movie?.rating}/>
   
  </Card.Body>
</Card>

        </div>
    )
}