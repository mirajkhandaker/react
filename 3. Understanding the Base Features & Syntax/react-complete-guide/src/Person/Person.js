import React from 'react';

const person = (props) => {
  return  <p>I am {props.name}. My age is {props.age}.<span>{props.children}</span></p>
};

export default person;