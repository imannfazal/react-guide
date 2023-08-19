import React from 'react'

const person = (props) => {
  return (
    <>
      <div>Person name is {props.name} {Math.floor(Math.random() * 30)}</div>
      <div>{props.children}</div>
    </>
  )
}

export default person