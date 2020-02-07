import React, { Component } from 'react';
import './App.css';
import './UserInput/UserInput';
import './UserOutput/UserOutput';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {

    state = {
        userName: 'Miraj Khandaker'
    };

    changeState = (event) => {
        this.setState({
            userName: event.target.value
        })
    };

  render() {
    return (
      <div className="App">
          <UserInput
              name={this.state.userName}
              changeN={this.changeState}/>
          <UserOutput
              name={this.state.userName}/>
          <UserOutput
              name={this.state.userName}/>
      </div>
    );
  }
}

export default App;
