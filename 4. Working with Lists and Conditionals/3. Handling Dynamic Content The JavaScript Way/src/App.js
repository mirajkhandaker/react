import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
        {name: 'miraj', age:'28'},
        {name: 'mitu', age:'30'},
        {name: 'awal', age:'38'},
    ],
    other:"Other Value",
      showPerson: false
  };

  switchNameHandler = (newName) => {
    this.setState({
        person: [
            {name: newName, age:'28'},
            {name: 'mitu', age:'30'},
            {name: 'awal', age:'38'},
        ]
    });
};

    changeNameHandler = (event) => {
        this.setState({
            person: [
                {name: "miraj", age:'28'},
                {name: event.target.value, age:'30'},
                {name: 'awal', age:'38'},
            ]
        });
    };

    togglePerson = () =>{
        const doesShow = this.state.showPerson;
        this.setState(
            {showPerson : !doesShow}
        );
    };


  render() {
      const style ={
            backgroundColor: 'gray',
            border: '1px solid black',
            color: '#fff',
            padding: '5px',
            fontSize: '16px'
      };

      let persons = null;

      if (this.state.showPerson){
          persons = (
              <div>
                  {
                      this.state.person.map(singlePerson => {
                          return <Person
                              name={singlePerson.name}
                              age={singlePerson.age} />
                      })
                  }

              </div>
          );
      }

    return (
      <div className="App">
        <h1>Hi, I am react App</h1>
        <button style={style}
            onClick={this.togglePerson}>Switch Name</button>
          {persons}
      </div>
    );
  }
}

export default App;
