import React, { Component } from 'react'
import './Person.css'
class Person extends Component{
  render(){
  return (
    <div className='person'>
      <button onClick={this.props.click}>Delete person</button>
      <p>Person name is {this.props.name}</p>
      <div>{this.props.children}</div>
      <input type='text' className='input' onChange={this.props.change} value={this.props.name} />
    </div>
  )
}}

export default Person;