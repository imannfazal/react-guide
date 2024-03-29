import React, { Component } from 'react'
import './Person.css'
import Auxilliary from '../hoc/Auxilliary';
import withClass from '../hoc/WithClass';
import PropTypes from 'prop-types';
class Person extends Component {
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount(){
    this.inputElementRef.current.focus();
  }
  render() {
    return (
      <Auxilliary>
        <button onClick={this.props.click}>Delete person</button>
        <p>Person name is {this.props.name}</p>
        <div>{this.props.children}</div>
        <input
          ref={this.inputElementRef}
          type='text' className='input' onChange={this.props.change} value={this.props.name}
        />
      </Auxilliary>
    )
  }
}

Person.propTypes = {
  name: PropTypes.string,
  click: PropTypes.func,
  age: PropTypes.number,
}

export default withClass(Person, "person");
