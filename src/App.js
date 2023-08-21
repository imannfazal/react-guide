import React, { useState } from "react";
import Person from "./components/Person/Person";
import UserOuput from "./components/UserOutput/UserOuput";
import UserInput from "./components/UserInput/UserInput";

const App = () => {
  const [userName, setUsername] = useState('iman');
  const [showPersons, setShowPersons] = useState(false);
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

  const nameChangedHandler = (event) => {
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

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  }

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons);
  }


  return (
    <div>
      <button onClick={togglePersonsHandler}>Show persons</button>
      {
        (showPersons===true) ?
          <div>
            <Person change={nameChangedHandler} name={personsState.persons[0].name} >Hobbies are racing, sketching</Person>
            <Person name={personsState.persons[2].name} ></Person>
          </div> : null
      }
      <UserInput current={userName} changed={usernameHandler} />
      <UserOuput username={userName} />
      <UserOuput username={userName} />

    </div>
  );
}


export default App;
