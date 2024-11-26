import React, { useState } from 'react'

export const Contador = () => {
        const [cont,setCont]=useState(0)

        const sumar=()=>{
            setCont(cont+1)
        }

        const restar=()=>{
          setCont(cont-1)
        }
    
  return (
    <div >

    <p>{cont}</p>
    <button onClick={restar}>restar</button>
    <button onClick={sumar}>sumar</button>
    </div>
  )
}
