import React from 'react'

export const Card = (props) => {
  return (
    <div>
         <img src={props.url} alt="" style={{borderRadius:'50%'}} />   
         <p>{props.nombre}</p>
    </div>
        
  )
}
