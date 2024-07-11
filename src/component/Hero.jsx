import React from 'react'

export const Hero = (props) => {
  return (
    <>
      <h1>{props.title}</h1><br/>
        {props.desc}
      <ul>
        <li> Name:{props.item['name']} </li>
        <li> Age:{props.item['age']} </li>
        <li> City: {props.item['city']} </li>
      </ul>
    </>
  )
  
}

