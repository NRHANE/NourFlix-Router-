import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import MovieList from './Components/MovieList'
import Navigation from './Components/Navigation'
import Trailer from './Components/Trailer';

function App() {
  const[text,setText]= useState("");
  const[rating,setRating]= useState("");
  
  const [movies, setMovies] =useState([
    {
      name: "Game of thrones",
      description: "Genre : Fantasy",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
      rate: "3",
    },
    {
      name: "Breaking bad",
      description:
        "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
      rate: "4",
    },
    {
      name: "hunter x hunter",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
      rate: "5",
    },
   {
      name: "movie 1",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNzU4NWEwNDItMzMzYy00ZDYyLWIxZjMtMDlkYWVjNjQwYzBjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      rate: "5",
    },    
     {
      name: "Free guy",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://i.ytimg.com/vi/N2R2bjxjcS0/movieposter_en.jpg",
      rate: "3.5",
    },
    {
      name: "Adam's family ",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://www.miconcinemas.com/media/1712/webtheaddamsfamily2_payoffposter_resizewidth-800.jpg",
      rate: "4",
    },
    {
      name: "The Circle",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMjY2OTM2Njc3Ml5BMl5BanBnXkFtZTgwNDgzODU3MTI@._V1_.jpg",
      description:
      "Is ecstatic to be employed in the biggest tech company in the world.",
      rate: 2,
    },
    {
      name: "Inception",
      posterUrl:
        "https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg",
      description:
        "Cobb steals information from his targets by entering their dreams. ",
      rate: 3,
    },
    {
      name: "Shutter Island",
      posterUrl:
        "https://starzplay-img-prod-ssl.akamaized.net/474w/Paramount/SHUTTERISLANDY2010M/SHUTTERISLANDY2010M-474x677-PST.jpg",
      description:
        "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order ",
      rate: 5,
    },
    {
      name: "Warcraft",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Warcraft_Teaser_Poster.jpg",
      description:
        "A few human survivors must team up with a group of dissenting Orcs to stop an Orc horde from invading. ",
      rate: 1,
    },
   
  ])
  
   return (
    <div>
      
      <Navigation setText={setText} 
      setRating={setRating}/>
    
      <Routes>
        <Route path="/" element={<MovieList  
        movies={movies} setMovies={setMovies} 
        text={text} 
        rating={rating}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/trailer/:name" element={<Trailer movies ={movies}/>} />
      </Routes>
    </div>
  )
}

export default App
