import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';
import HomeIcon from '@material-ui/icons/Home';
import MenuItem from './MenuItem'

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
                <MenuItem url="/space" text="Visit Map" iconComponent={<MapIcon fontSize="large" />} />
            break;
        case '/time':
            NavElement =
                <>
                    <MenuItem url="/space" text="Visit Map" iconComponent={<MapIcon fontSize="large" />} />
                    <MenuItem url="/" text="Back to Home" iconComponent={<HomeIcon fontSize="large" />} />
                </>
            break;
        default:
            NavElement =
                <MenuItem url="/" text="Back to Home" iconComponent={<HomeIcon fontSize="large" />} />
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.appbarWrapper}>
                    <Typography variant="h5">
                        Temperature at Playgrounds
                    </Typography>
                    <Box className={classes.iconLocation}>
                        {NavElement}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
