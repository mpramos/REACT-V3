import React, { useState } from 'react'

const FormularioValidacion = () => {
    const [formData, setFormData]=useState({nombre:'', email:''})
    const [error, setError]= useState({})

    const handleSubmit=(e)=>{
        e.preventDefault()
        if (!formData.nombre || !formData.email) {
            alert('Por favor debe completar todos los campos')
        }else{
            alert(` Datos enviados ${formData.nombre} ${formData.email}`)
        }
    }
    const handleChange=(e)=>{
        const {name, value}=e.target
        setFormData({...formData, [name]: value})

        }
    const handleBlur=(e)=>{
        const {name, value} = e.target
        if (!value) {
            setError((prevError)=>({...prevError, [name]:'Este campo es obligatorio'}))
        }else{
            setError((prevError)=>({...prevError, [name]:''}))
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label >Nombre</label>
                <input 
                    type="text"
                    name="nombre"    
                    value={formData.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                {error.nombre && <span>{error.nombre}</span>}
            </div>
            <div>
                <label >Email</label>
                <input 
                    type="email"
                    name="email"    
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                {error.email && <span>{error.email}</span>}
            </div>
            <button type='submit'>enviar</button>
        </form>

    )
}

export default FormularioValidacion