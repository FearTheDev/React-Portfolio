import React from 'react';
import maincontent from './maincontent.module.scss';

const MainContent = ({children}) =>{
    return (
        <div className={maincontent.body}>
            {children}
        </div>
    );
};

export default MainContent;