import React from 'react';
import "./Person.css"

const person = (props) => {
  return  (
      <div className="person">
      <p onClick={props.click}>I am {props.name}. My age is {props.age}.<span>{props.children}</span></p>
      <input type="text" onChange={props.change} value={props.name} />
      </div>
          );
};

export default person;