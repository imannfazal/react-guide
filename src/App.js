import React, { useState } from "react";
import Person from "./Person/Person";

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'max', age: 12 },
      { name: 'laiba', age: 42 },
      { name: 'me', age: 2 },
    ]
  })

  const switchNameHandler = () => {
    setPersonsState(
      {
        persons: [
          { name: 'maximilian', age: 12 },
          { name: 'laiba', age: 42 },
          { name: 'iman', age: 2 },
        ]
      }
    );
  }

  const nameChangedHandler = (event) =>{
    setPersonsState(
      {
        persons: [
          { name: event.target.value, age: 12 },
          { name: 'laiba', age: 42 },
          { name: event.target.value, age: 2 },
        ]
      }
    );
  }


  return (
    <div>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person change={nameChangedHandler} name={personsState.persons[0].name} >Hobbies are racing, sketching</Person>
      <Person name={personsState.persons[2].name} ></Person>

    </div>
  );
}


export default App;
