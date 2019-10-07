import React from 'react';

const Project = (props) =>{

    console.log(props);
    return (
        <div>
            <h1>Project Name: {props.name}</h1>
            <h2>Description: {props.description}</h2>
            <p>{props.clone_url}</p>
            <p>Forks: {props.forks_count}</p>
        </div>
    );
};

export default Project;