import React, { Component } from 'react'
import './Person.css'
import Auxilliary from '../hoc/Auxilliary';
import withClass from '../hoc/WithClass';
class Person extends Component{
  render(){
  return (
    <Auxilliary>
      <button onClick={this.props.click}>Delete person</button>
      <p>Person name is {this.props.name}</p>
      <div>{this.props.children}</div>
      <input type='text' className='input' onChange={this.props.change} value={this.props.name} />
    </Auxilliary>
  )
}}

export default withClass(Person, "person") ;