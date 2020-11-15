import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
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

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.appbarWrapper}>
                    <Typography variant="h5">
                        Temperature at Playgrounds
                    </Typography>
                    {
                        (history.location.pathname === '/space')
                            ?
                            < IconButton className={classes.iconLocation} color="inherit" onClick={() => history.push("/")}>
                                <Typography variant="h5">
                                    Back to Home
                                </Typography>
                                <HomeIcon fontSize="large" />
                            </IconButton>
                            :
                            <IconButton className={classes.iconLocation} color="inherit" onClick={() => history.push("/space")}>
                                <Typography variant="h5">
                                    Visit Map
                                </Typography>
                                <MapIcon fontSize="large" />
                            </IconButton>
                    }
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
