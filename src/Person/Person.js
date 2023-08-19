import React from 'react'
import './Person.css'
const person = (props) => {
  return (
    <div className='person'>
      <p>Person name is {props.name} {Math.floor(Math.random() * 30)}</p>
      <div>{props.children}</div>
      <input onChange={props.change} value={props.name} />
    </div>
  )
}

export default person