import React from 'react'

const person = (props) => {
  return (
    <>
      <p onClick={props.change}>Person name is {props.name} {Math.floor(Math.random() * 30)}</p>
      <div>{props.children}</div>
    </>
  )
}

export default person