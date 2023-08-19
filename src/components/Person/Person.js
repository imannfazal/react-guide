import React from 'react'
import './Person.css'
const person = (props) => {
  return (
    <div className='person'>
      <p>Person name is {props.name}</p>
      <div>{props.children}</div>
      <input className='input' onChange={props.change} value={props.name} />
    </div>
  )
}

export default person