import React from 'react'
import { Card } from './Card'

export const Header = ({
  datos:{
    bienvenida,
    titulo,
    subtitulo,
    año,
    autor:{
      nombre,
      academia,
      imagen
    }
  }
 }) => {
  return (
    <div className='header-wrapper'>
    <h1>{bienvenida}</h1>
    <h2>{titulo}</h2>
    <h3>React es una {subtitulo}</h3>
    <p>Academia {nombre} Partner de {academia}</p>
    <small>18 Nov,{año}</small>
    <Card url={imagen} nombres={nombre}/>
</div>
  )
}


