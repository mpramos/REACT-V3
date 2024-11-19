import React from 'react'
import { Skills } from './Skills'

export const Pincipal = () => {
  const skills=[ 'Html', 'css','javaScript']
  return (
    <>
    <h2>Pre requisitos para iniciar en React</h2>
    <ul>
    <Skills skills={skills}/>
    </ul>
    </>
  )
}
