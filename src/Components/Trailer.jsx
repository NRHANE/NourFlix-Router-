import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { useParams } from 'react-router-dom';

function Trailer({movies}) {
    const params = useParams();
    const movie = movies.filter((el)=>el.name == params.name)[0];
  return (
    <div
    style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        margin:"0 25px",
    }}
    >
      <img src={movie.posterUrl}/>
      <h1>{movie.name}</h1>
      <p>{movie.description}</p>
      <ReactStars count={5} size={24} 
      activeColor="#ffd700" edit={false} 
      value={movie.rate}/>
    </div>
  )
}

export default Trailer
