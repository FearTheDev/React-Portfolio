import React from 'react';
import {Avatar, makeStyles} from '@material-ui/core';

const profileStyle = makeStyles({
    avatar:{
        margin:10,
    },
    large:{
        margin: 5,
        width:'128px',
        height:'128px',
    },
});

const ProfileImage = ({src}) =>{

    const classes = profileStyle();

    return (
        <>
            <Avatar src={src} className={classes.large}/>
        </>
    );
};

export default ProfileImage;