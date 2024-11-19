import React from 'react'
import { Button } from './Button'
import Input from './Input'

const isLoggin=true
export const Ejemplo = () => (
  <>
  {/* {isLoggin ? <Button text='estas logueado'/>:<Button text='no estas logueado'/>} */}
  <Button text={isLoggin? 'estas logueado' :'no estas logueado'}/>
  <br />
  <input type="text" />

  <Button text='enviar'/>
  <Button text='cancelar'/>
  <Input/>

  </>

)





export default function Ejemplo1() {
  return (
    <h1>EJEMPLO 2 </h1>
  )
}

