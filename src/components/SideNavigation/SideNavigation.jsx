import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import sidenavigation from './sidenavigation.module.scss';

const SideNavigation = ({children, handle, img, user, title, email, copyright}) => {

    return (
        <div className={sidenavigation.sidebar}>
            <h1>{handle}<span>{`${title}`}</span></h1>
            <Avatar className={sidenavigation.avatar} src={img} alt={`image of ${user}`} />
            <h2>{user}</h2>
            {children}
            <a className={sidenavigation.email} href={`mailto:${email}`}>{email}</a>
            <footer>
                <Typography className={sidenavigation.copyright} color="textSecondary">{copyright}</Typography>
            </footer>
        </div>
    );
};

export default SideNavigation;