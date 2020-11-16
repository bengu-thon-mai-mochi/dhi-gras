import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Typography, Container, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowIcon from '@material-ui/icons/ArrowDropDownCircle';
import navigationImage from '../assets/undraw_Navigation_re_wxx4.svg';

const useStyles = makeStyles({
    root: {
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10',
        backgroundImage: `url(${navigationImage})`,
        backgroundSize: 'cover'
    },
    containerStyle: {
        height: '400px',
        width: "400px",
        borderRadius: "50%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#ffffff80'
    }
})


const Home = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Container className={classes.root}>
            <Box className={classes.containerStyle}>
                <Typography variant="h3"> Visit <br /> the <br />  Map</Typography>
                <IconButton color="primary" onClick={() => history.push("/space")} >
                    <ArrowIcon fontSize="large" />
                </IconButton>
            </Box>
        </Container>
    );
};

export default Home;
