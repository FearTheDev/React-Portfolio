import React from 'react';
import { Typography } from '@material-ui/core';
import socialmedia from './socialmedia.module.scss';


const SocialMedia = ({twitter, github, linkedin}) => {

    return (
        <div className={socialmedia.wrapper}>
            <div className={socialmedia.media}>
                <i className="fab fa-twitter"></i>
                <Typography className={socialmedia.type}>Twitter</Typography>
            </div>
            <div className={socialmedia.media}>
                <i className="fab fa-github"></i>
                <Typography className={socialmedia.type}>GitHub</Typography>
            </div>
            <div className={socialmedia.media}>
                <i className="fab fa-linkedin-in"></i>
                <Typography className={socialmedia.type}>LinkedIn</Typography>
            </div>
        </div>
    );
};

export default SocialMedia;