import React from 'react'

export const Button = (props) => {
    const handleClick=()=>alert('estas dentro')
  return (
    <button onClick={handleClick}>{props.text}</button>
  )
}
