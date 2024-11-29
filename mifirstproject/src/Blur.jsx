import React, { useState } from 'react'

const Blur = () => {
    const [mensaje, setMensaje ]=useState('')
    const handleBlur=()=>  setMensaje('El input ha perdido el foco')
  
    return (
    <>
        <input type="text" onBlur={handleBlur} />
        <p>{mensaje}</p>
    </>
  )
}

export default Blur