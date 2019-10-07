import React from 'react';
import greeting from './greeting.module.scss';

const Greeting = ({intro, name, message }) => {
    return (
        <div className={greeting.body}>
            <div className={greeting.message}>
                <h1>{intro}<span>{name}</span></h1>
                <h2>{message}</h2>
            </div>
        </div>
    );
};

export default Greeting;