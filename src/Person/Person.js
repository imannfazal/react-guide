import React from 'react'

const person = (props) => {
  return (
    <>
      <p>Person name is {props.name} {Math.floor(Math.random() * 30)}</p>
      <div>{props.children}</div>
      <input onChange={props.change} />
    </>
  )
}

export default person