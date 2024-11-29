import React, { useState } from 'react'

const MouseEnterLeave = () => {
    const [mensaje, setMensaje]=useState('Pasa el mouse sobre el area')

    const handleMouseEnter=()=> setMensaje('El mouse está dentro del area')
    const handleMouseLeave=()=>setMensaje('El mouse ha salido del area')

  return (
        <div
        style={{border:'5px solid red', padding:'20px'}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <p>{mensaje}</p>
        </div>
  )
}

export default MouseEnterLeave