import { Component } from "react";
import Person from "./Person/Person";

class App extends Component{
  state = {
    persons: [
      {name: 'max', age: 12},
      {name: 'laiba', age: 42},
      {name: 'me', age: 2},
    ]
  }

  switchNameHandler= ()=>{
    this.setState(
      {
        persons: [
          {name: 'maximilian', age: 12},
          {name: 'laiba', age: 42},
          {name: 'iman', age: 2},
        ]
      }
    );
  }

  render(){
    return (
      <div>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} >Hobbies are racing, sketching</Person>
        <Person name={this.state.persons[2].name} ></Person>

      </div>
    );
  }
}

export default App;
