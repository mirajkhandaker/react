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
    other:"Other Value"
  }

  switchNameHandler = () => {
    this.setState({
        person: [
            {name: 'miraj khandaker', age:'28'},
            {name: 'mitu', age:'30'},
            {name: 'awal', age:'38'},
        ]
    });
}

  render() {
    return (
      <div className="App">
        <h1>Hi, I am react App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
          <Person name={this.state.person[1].name} age={this.state.person[1].age} > My Hobbie: Nothing </Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;
