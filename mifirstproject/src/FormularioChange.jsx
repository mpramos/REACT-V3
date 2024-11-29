import React, { useState } from 'react'

const Formulario = () => {

    const[inputValue, setInputValue]=useState('')
    const handleSubmit=(e)=>{
                e.preventDefault()
                console.log(`Formulario enviado con el valor ${inputValue}`);
    }

  return (
    <>
    <div>
        <form onSubmit={handleSubmit} >
            <input 
            type="text"
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
            />
        <button type='submit'>enviar</button>
        </form>
    </div>
    </>
)
}

export default Formulario