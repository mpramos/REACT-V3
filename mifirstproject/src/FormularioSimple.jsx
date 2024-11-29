import React, { useState } from 'react'

export const FormularioSimple = () => {
    const [nombre, setNombre]=useState('')
    const [email, setEmail]=useState('')

    const manejarEnvio=(e)=>{
            e.preventDefault()
            alert(`Nombre ${nombre} Email ${email}`)
    }
  return (
    <form onSubmit={manejarEnvio}>
        <div>
            <label > Nombre </label>
            <input 
            type="text"
            value={nombre}
            onChange={e=>setNombre(e.target.value)}
            />
        </div>
        <div>
            <label > Email </label>
            <input 
            type="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
        </div>
        <button type='submit'>enviar</button>

    </form>
  )
}
