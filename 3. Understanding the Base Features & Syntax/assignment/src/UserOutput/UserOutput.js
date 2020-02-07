import React from 'react';

const UserOutput = (props) => {
    const style ={
        border: '1px solid gray',
        padding: '10px',
        display: 'inline-block'
    };
    return (
        <div>
            <p style={style}>UserName: {props.name}</p>
        </div>
    );
};

export default UserOutput;