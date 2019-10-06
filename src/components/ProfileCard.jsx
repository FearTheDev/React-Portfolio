import React from 'react';
import { Card, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:'50px 0px 50px 0px',
        padding: '10px',
        width:'350px',
        height:'150px',
    },
});


const ProfileCard = ({ children }) => {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
                {children}
        </Card>
    );
};

export default ProfileCard;