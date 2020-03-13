import React from 'react';
import ReactDom from 'react-dom';

function Greetings(){
    return <h1>hello greetings</h1>
}

ReactDom.render(<Greetings />,document.getElementById('root'));