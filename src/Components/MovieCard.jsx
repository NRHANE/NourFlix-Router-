import React from 'react';
import { Card } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function MovieCard({movie}) {
  return (
    <div>
      
      <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={movie.posterUrl} style={{maxHeight:"286px", minHeight:"286px"}}/>
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>
      {movie.description}</Card.Text>
  </Card.Body>
<span style ={{margin:"0 auto"}}>
  <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    edit ={false}
    value ={movie.rate}
  />
  </span>
</Card>

<Link to={`/trailer/${movie.name}`}>
  <span style={{marginLeft:"120px"}}><button  style={{borderColor:"yellow"}}>trailer</button></span></Link>
    </div>
  )
}

export default MovieCard
