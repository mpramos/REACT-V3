import React, { useState } from 'react'

const OnKeyPress = () => {
    const [key, setKey]=useState('')
    const handleKeyDown=(e)=> setKey(e.key)
  return (
    <>
        <input type="text" onKeyDown={handleKeyDown}/>
        <p>Has presionado la tecla {key}</p>
    </>
  )
}

export default OnKeyPress