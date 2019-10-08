import React from 'react';

const Project = (props) =>{

    console.log(props);
    console.log(`https://raw.githubusercontent.com/${props.owner.login}/${props.name}/master/src/project_thumbnail.png`);
    return (
        <>
            <div>
                <img width={'300px'} src={`https://raw.githubusercontent.com/${props.owner.login}/${props.name}/master/src/project_thumbnail.png`} alt={`${props.name} project`} />
            </div>
            <div>
                <h1>Project Name: {props.name}</h1>
                <h2>Description: {props.description.replace(props.repoFilter.key, '')}</h2>
                <p>{props.clone_url}</p>
                <p>Forks: {props.forks_count}</p>
            </div>
        </>
    );
};

export default Project;