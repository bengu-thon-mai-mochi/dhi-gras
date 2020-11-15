import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerStyle: {
        textAlign: 'center'
    }
})


const Home = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <div className={classes.containerStyle}>
                <Typography variant="h4"> Welcome to <br /> Temperature <br /> at <br />  Playgrounds</Typography>
            </div>
        </Box >
    );
};

export default Home;
