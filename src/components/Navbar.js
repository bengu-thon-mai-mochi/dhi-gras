import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    appbarWrapper: {
        display: 'flex',
        flexGrow: '1'
    },
    iconLocation: {
        flexGrow: '1',
        display: 'flex',
        justifyContent: 'flex-end'
    }
}))

const Navbar = () => {
    const classes = useStyles();
    const history = useHistory();

    let NavElement;

    switch (history.location.pathname) {
        case '/':
            NavElement =
                <Box className={classes.iconLocation}>
                    <IconButton color="inherit" onClick={() => history.push("/space")}>
                        <Typography variant="h5">
                            Visit Map
                        </Typography>
                        <MapIcon fontSize="large" />
                    </IconButton>
                </Box>
            break;
        case '/time':
            NavElement =
                <>
                    <Box className={classes.iconLocation}>
                        <IconButton color="inherit" onClick={() => history.push("/space")}>
                            <Typography variant="h5">
                                Visit Map
                            </Typography>
                            <MapIcon fontSize="large" />
                        </IconButton>
                        <IconButton color="inherit" onClick={() => history.push("/")}>
                            <Typography variant="h5">
                                Back to Home
                            </Typography>
                            <HomeIcon fontSize="large" />
                        </IconButton>
                    </Box>
                </>
            break;
        default:
            NavElement =
                <Box className={classes.iconLocation}>
                    <IconButton color="inherit" onClick={() => history.push("/")}>
                        <Typography variant="h5">
                            Back to Home
                        </Typography>
                        <HomeIcon fontSize="large" />
                    </IconButton>
                </Box>
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.appbarWrapper}>
                    <Typography variant="h5">
                        Temperature at Playgrounds
                    </Typography>
                    {NavElement}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
