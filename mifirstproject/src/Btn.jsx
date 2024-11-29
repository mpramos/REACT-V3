import React from 'react'

const Btn = () => {

    const handleClick=()=>alert('Me hiciste click')

  return (
    <>
        <button onClick={handleClick}>enviar</button>
    </>
  )
}

export default Btn