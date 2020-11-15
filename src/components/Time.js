import React, { useContext } from 'react';
import Graph from './Graph';
import GeoContext from '../geoContext';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerStyle: {
        textAlign: 'center'
    }
})

const Time = () => {
    const classes = useStyles();
    const { locationInfo } = useContext(GeoContext);

    return (
        <>
            {
                locationInfo
                    ?
                    <Graph />
                    :
                    <Box className={classes.root}>
                        <Box className={classes.containerStyle}>
                            <Typography variant="h4"> Please go to maps <br /> and <br /> Select a playground </Typography>
                        </Box>
                    </Box>
            }
        </>
    );
};

export default Time;
