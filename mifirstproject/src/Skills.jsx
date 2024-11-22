import React from 'react'

export const Skills = (props) => {
  
    const skillsFormated=props.skills.map(skill=><li key={skill}>{skill}</li>)    
 
    return (
    <ul>
      {skillsFormated}
    </ul>
  )
}
