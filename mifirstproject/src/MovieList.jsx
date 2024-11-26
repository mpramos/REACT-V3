import React, { useEffect, useState } from 'react'
import './MovieCrd.css'


const MovieList = () => {

    const [peliculas, setPeliculas]=useState([])
useEffect(()=>{
    try {
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=${apikey}`)
        .then(respuesta=> respuesta.json())
        .then(data=>{
            setPeliculas(data.results)
        })
        
    } catch (error) {
        console.error('error ', error)
    }
},[])


    return (
    <>
    <h1>Peliculas</h1>
    {console.log('peliculas',peliculas)}
    {peliculas.map(pelicula=>
        <div key={pelicula.name}>

            {/* <img src={`https://image.tmdb.org/t/p/w500$${pelicula.poster_path}`} alt={pelicula.name} /> */}
            <p>{pelicula.name}</p>
        </div>
    )}
    </>
  )
}

export default MovieList