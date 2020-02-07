import React from 'react';
import './UserInput.css';
const UserInput = (props) => {
  return <input type="text" onChange={props.changeN} value={props.name}/>
};

export default UserInput;