import React, { useState } from 'react'

const FormularioComplejo = () => {
    const [formData,setFormData]=useState({
        firstName:'',
        lastName:'',
        email:''
    })
  
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('Datos del formulario ', formData);
    }
    const handleChange=(e)=>{
            const {name,value}= e.target
            setFormData((prevData)=>({...prevData,[name]:value}))
    }
    return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Nombre</label>
            <input 
                type="text"
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                />    
            </div>    
            <div>
            <label>Email</label>
            <input 
                type="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                />    
            </div>    
            <div>
            <label>Apellido</label>
            <input 
                type="text"
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                />    
            </div>    
            <button type="submit">enviar</button>
        </form>    
    </>
)
}

export default FormularioComplejo