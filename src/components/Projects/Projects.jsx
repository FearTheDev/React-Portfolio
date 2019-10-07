import React, {useState, useEffect} from 'react';
import Project from './Project';
import axios from 'axios';
import projects from './projects.module.scss';

const Projects = ({user}) =>{
    const [userRepo, setUserRepo] = useState();

    useEffect(() =>{
        axios.get(`https://api.github.com/users/${user}/repos`)
        .then(res => setUserRepo(res.data.reverse()))
        .catch(error => console.log(`Error ${error}`));
    }, [user]);

    if(!userRepo){
        return <h1>Fetching projects..</h1>
    }

    return(
        <div className={projects.body}>
            
            {userRepo.map((repo, index) =>{
                return <Project key={index} {...repo}/>
            })}
            
        </div>
    );
};

export default Projects;