import React from 'react';
import Navbar from './Navbar';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh"
    }
}))

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Navbar></Navbar>
            {children}
        </Box>
    );
};

export default Layout;
