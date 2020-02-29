import React from "react";
import cssClass from "./Cockpit.css"

const cockpit = (props) => {

    const classes = [];
    let buttonStyle = [cssClass.Button];

    if (props.persons.length <=2){
        classes.push(cssClass.Red);
    }

    if (props.persons.length <= 1){
        classes.push(cssClass.Bold);
    }

    if ( props.showPersons ) {
        buttonStyle.push(cssClass.red);
    }

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button className={buttonStyle.join(' ')}
                    onClick = {props.togglePersonsHandler}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;