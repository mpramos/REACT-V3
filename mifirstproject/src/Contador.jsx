import React, { useState } from 'react'

export const Contador = () => {
        const [cont,setCont]=useState(0)

        const contar=()=>{
            setCont(cont+1)
        }
    
  return (
    <button onClick={contar}>{cont}</button>
  )
}
