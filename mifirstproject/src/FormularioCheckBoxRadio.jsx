import React, { useState } from 'react'

const FormularioCheckBoxRadio = () => {
    const[formData, setFormData]= useState({
        gender:'',
        skills:{
            html:false,
            css:false,
            javascript:false
        }
    }) 

const handleSumbit=(e)=>{
        e.preventDefault()
        console.log('Datos del formulario ', formData);
        
}

const handleChange=(e)=>{
        const {name, value, type,checked}=e.target
        if (type==='checkbox') {
            setFormData((prevData)=>({
                ...prevData,
                skills:{
                    ...prevData.skills,
                    [name] :checked                      
                }
            }))
        }else{
            setFormData((prevData)=>({
                ...prevData,
               [name]:value
            }))
        }
}

  return (
    <form  onSubmit={handleSumbit}>
        <div>
            <label> Genero</label>
            <label>
                <input 
                    type="radio"
                    name='gender'
                    value='masculino'
                    checked={formData.gender==='masculino'}
                    onChange={handleChange}
                    />
                Masculino
            </label>
            <label>
                <input 
                type="radio" 
                name='gender'
                value='femenino'
                checked={formData.gender==='femenino'}
                onChange={handleChange}
                />
                Femenino
            </label>
        </div>
        <div>
            <label> Habilidades</label>
            <label>

             <input
                type='checkbox'
                name='html'
                checked={formData.skills.html}
                onChange={handleChange}             
                />   
                HTML
        </label>
            <label>

             <input
                type='checkbox'
                name='css'
                checked={formData.skills.css}
                onChange={handleChange}             
                />   
                CSS
        </label>
            <label>

             <input
                type='checkbox'
                name='javascript'
                checked={formData.skills.javascript}
                onChange={handleChange}             
                />   
                JavaScript
        </label>
        </div>
    <button type="submit">enviar</button>

    </form>
  )
}

export default FormularioCheckBoxRadio