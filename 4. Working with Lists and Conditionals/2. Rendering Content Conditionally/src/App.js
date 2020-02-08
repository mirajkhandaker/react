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
    return (
      <div className="App">
        <h1>Hi, I am react App</h1>
        <button style={style}
            onClick={this.togglePerson}>Switch Name</button>
          {
              this.state.showPerson ?
              <div>
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
          </div> : null
          }

      </div>
    );
  }
}

export default App;
