import React from 'react';
import Lottie from 'react-lottie';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import animationData from '../lotties/6358-tree-swing.json';

const useStyles = makeStyles({
    root: {
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        padding: '50px'
    },
    containerStyle: {
        textAlign: 'center',
        paddingTop: '10px'
    }
});

const LoadingPage = () => {
    const classes = useStyles();

    return(
            <Box className={classes.root}>
                    <Lottie options={{
                        loop: true,
                        autoplay: true,
                        animationData: animationData,
                        rendererSettings: {
                            preserveAspectRatio: "xMidYMid slice"
                        }
                    }}
                        height={300}
                        width={300} />
                    <Box className={classes.containerStyle}>
                        <Typography variant="h4"> Loading </Typography>
                    </Box>
                </Box>
    )
}

export default LoadingPage;
