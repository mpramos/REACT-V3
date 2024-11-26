import React, { useEffect, useState } from 'react'


const Data = () => {
    let url='https://rickandmortyapi.com/api/character'
    const [personajes, setPersonajes]= useState([])
    
    useEffect(()=>{
          const fetchPersonajes=async () => {
            try {
                const respuesta= await fetch(url)
                const data= await respuesta.json()
                setPersonajes(data.results)
            } catch (error) {
                console.log('Error al ir cargando los personajes ', error);
            }
          }
          fetchPersonajes()
    },[])
    
  return (
    <div>

        {personajes.map(personaje=>
        <>
        <p>{personaje.name}</p>
        <img src={personaje.image}/>

        </>)
        }
    </div>
  )
}

export default Data