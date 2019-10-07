import React from 'react';
import { Typography } from '@material-ui/core';
import socialmedia from './socialmedia.module.scss';


const SocialMedia = ({twitter, github, linkedin}) => {

    return (
        <div className={socialmedia.wrapper}>
            <div className={socialmedia.media}>
                <i className="fab fa-twitter"></i>
                <a href={twitter} target="_blank" rel="noopener noreferrer"><Typography className={socialmedia.type}>Twitter</Typography></a>
            </div>
            <div className={socialmedia.media}>
                <i className="fab fa-github"></i>
                <a href={github} target="_blank" rel="noopener noreferrer"><Typography className={socialmedia.type}>GitHub</Typography></a>
            </div>
            <div className={socialmedia.media}>
                <i className="fab fa-linkedin-in"></i>
                <a href={linkedin} target="_blank" rel="noopener noreferrer"><Typography className={socialmedia.type}>LinkedIn</Typography></a>
            </div>
        </div>
    );
};

export default SocialMedia;