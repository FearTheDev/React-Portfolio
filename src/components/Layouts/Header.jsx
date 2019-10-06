import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar';

const Header = props => {
    
    return (
        <AppBar position="static">
            <ToolBar>
                <Typography variant="headline" color="inherit">
                    FearTheDeveloper
            </Typography>
            </ToolBar>
        </AppBar>
    );
}

export default Header;