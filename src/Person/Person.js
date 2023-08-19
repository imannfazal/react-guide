import React from 'react'

const person = (props) => {
  return (
    <div>Person name is {props.name} {Math.floor(Math.random()*30)}</div>
  )
}

export default person