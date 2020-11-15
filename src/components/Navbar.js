import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';

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
                    <IconButton className={classes.iconLocation} color="inherit" onClick={() => history.push("/space")}>
                        <Typography variant="h5">
                            Visit Map
                        </Typography>
                        <MapIcon fontSize="large" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
