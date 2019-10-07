import React, {useState} from 'react';
import Project from './Project';
import projects from './projects.module.scss';

const Projects = ({user}) =>{
    const [userRepo, setUserRepo] = useState();


    return(
        <div className={projects.body}>
            <Project />
        </div>
    );
};

export default Projects;