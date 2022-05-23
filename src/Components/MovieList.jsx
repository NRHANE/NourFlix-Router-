import React from 'react'
import MovieAdd from './MovieAdd'
import MovieCard from './MovieCard'

function MovieList({movies , setMovies,text,rating}) {
  return (
    <div>
        <div style={{marginTop:"20px", marginLeft:"600px"}}>
        <MovieAdd movies={movies} setMovies={setMovies}/>
        </div>
        <div 
    style ={{marginTop:"150px" , 
    display:"flex",
     justifyContent:"space-around",
      flexWrap:"wrap"
      }}
      >
      {movies
      .filter((el)=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rate>=rating)
      
      
      .map((el)=> <MovieCard movie={el}/>)
      .reverse()}
    </div>
    </div>
    
  )
}

export default MovieList
