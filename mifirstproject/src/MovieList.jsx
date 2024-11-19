import React from 'react'
import './MovieCrd.css'


const MovieList = (props) => {
        console.log('peliculas', props.peliculas);
        const movies=props.peliculas.map( pelicula=>(
            <>
            <div style={{backgroundColor:'black', borderRadius:'10%', paddingBottom:'20px', marginBottom:'20px'}}>
                <img src={pelicula.imgUrl} style={{borderRadius:'10% 10% 0% 0%'}} alt="" />
                <h3>{pelicula.nombre}</h3>
                <p>{pelicula.fecha}</p>
            </div>
            </>
        ))
    return (
    <>
    {movies}
    </>
  )
}

export default MovieList