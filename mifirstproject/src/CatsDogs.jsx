import React, { useState } from 'react'

const CatsDogs = () => {
    let url='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/220px-Cat_November_2010-1a.jpg'
    const [imagen, setImagen]=useState(url)
    
    
    const cambiarMascota=()=>{
        let dogUrl='https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
        let catUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/220px-Cat_November_2010-1a.jpg'
        let result= imagen=== catUrl ? dogUrl:catUrl
        setImagen(result)  
    }
    return (
        <>
    <div>
        <img 
        src={imagen}
        alt='imagen'
        style={{
            height:'180px',
            width:'150px'
        }}
        />
    </div>
        <button onClick={cambiarMascota}>cambiar mascota</button>
        </>
  )
}


export default CatsDogs