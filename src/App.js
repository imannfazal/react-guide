import React, { useState } from "react";
import Person from "./components/Person/Person";
import UserOuput from "./components/UserOutput/UserOuput";
import UserInput from "./components/UserInput/UserInput";

const App = () => {
  const [userName, setUsername] = useState('iman');
  const [showPersons, setShowPersons] = useState(false);
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 'vx', name: 'max', age: 12 },
      { id: 'kl', name: 'laiba', age: 42 },
      { id: 'mn', name: 'me', age: 2 },
    ]
  })

  // const switchNameHandler = () => {
  //   setPersonsState(
  //     {
  //       persons: [
  //         { name: 'maximilian', age: 12 },
  //         { name: 'laiba', age: 42 },
  //         { name: 'iman', age: 2 },
  //       ]
  //     }
  //   );
  // }

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...personsState.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;
    setPersonsState({ persons: persons });

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

  const deletePersonHandler = (personIndex) => {
    //const persons = personsState.persons.slice();
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons: persons })
  }

  let persons = null;

  if (showPersons === true) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return <li key={person.id}>
            <Person
              name={person.name}
              age={person.age}
              click={() => deletePersonHandler(index)}
              change={(event) => nameChangedHandler(event, person.id)}
            /></li>
        })}
      </div>
    )
  }


  return (
    <div>
      <button onClick={togglePersonsHandler}>Show persons</button>
      <ul>{persons}</ul>
      <UserInput current={userName} changed={usernameHandler} />
      <UserOuput username={userName} />
      <UserOuput username={userName} />

    </div>
  );
}


export default App;
