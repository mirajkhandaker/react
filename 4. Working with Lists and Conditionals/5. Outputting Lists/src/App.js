import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
        {id: '1',name: 'miraj', age:'28'},
        {id: '2',name: 'mitu', age:'30'},
        {id: '3',name: 'awal', age:'38'},
    ],
    other:"Other Value",
      showPerson: false
  };

deletePersonHandler = (personIndex) => {
    // const personD = this.state.person.slice();
    const personD = [...this.state.person];
    personD.splice(personIndex,1);
    this.setState({person:personD});

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
                        this.state.person.map((singlePerson,index) => {
                            return <Person
                                click={this.deletePersonHandler.bind(this,index)}
                                name={singlePerson.name}
                                age={singlePerson.age}
                                key={singlePerson.id}/>
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
