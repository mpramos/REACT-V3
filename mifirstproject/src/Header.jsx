import React from 'react'
import { Card } from './Card'


const bienvenida='Bienvenidos a la especialidad de React'
let titulo='Iniciando en React'
let subtitulo='Libreria de JavaScript'
let nombre='Evolutech'
let academia='Cisco'
let año = new Date().getFullYear()

export const Header = () => {
  let nombre='Randy Dicknose'
  // let urlImagen='https://rickandmortyapi.com/api/character/avatar/275.jpeg'
  let urlImagen='https://media.themoviedb.org/t/p/w220_and_h330_face/abf8tHznhSvl9BAElD2cQeRr7do.jpg'

  return (
    <div className='header-wrapper'>
    <h1>{bienvenida}</h1>
    <h2>{titulo}</h2>
    <h3>React es una {subtitulo}</h3>
    <p>Academia {nombre} Partner de {academia}</p>
    <small>18 Nov,{año}</small>
    <Card url={urlImagen} nombre={nombre}/>
</div>
  )
}


