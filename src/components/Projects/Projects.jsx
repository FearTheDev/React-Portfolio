import React from 'react';
import Project from './Project';
import projects from './projects.module.scss';

const Projects = ({user}) =>{
    return(
        <div className={projects.body}>
            <Project />
        </div>
    );
};

export default Projects;