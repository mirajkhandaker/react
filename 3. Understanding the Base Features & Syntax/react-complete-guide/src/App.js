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


  render() {
      const style ={
            backgroundColor: 'gray',
            border: '1px solid black',
            color: '#fff',
            padding: '5px',
            fontSize: '16px'
      };
    return (
      <div className="App">
        <h1>Hi, I am react App</h1>
        <button style={style}
            onClick={() => this.switchNameHandler("miraj new")}>Switch Name</button>
        <Person
            name={this.state.person[0].name}
            age={this.state.person[0].age} />
        <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            click={this.switchNameHandler.bind(this,'miraj new khandaker')}
            change={this.changeNameHandler}
        > My Hobbie: Nothing </Person>
        <Person
            name={this.state.person[2].name}
            age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;
