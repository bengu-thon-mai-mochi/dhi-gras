import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Umbrella from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'white'
    },
    contentLabel: {
        fontWeight: 'bold',
        color: '#b3b3f2'
    },
    iconWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    iconRotate: {
        transform: 'rotate(90deg)',
        padding: '10'
    }
}))

const CustomTooltipContent = ({ active, payload }) => {
    const classes = useStyles();

    return (
        (active && payload) &&
        <Box className={classes.root}
            border={2}
            borderColor="secondary.main"
        >
            <Umbrella aria-hidden={true} fontSize="large" color="primary" />
            <Typography variant="h6">{payload[0].payload.time} o'clock </Typography>
            <Typography>
                <Box component="span" className={classes.contentLabel}> Temperature: </Box>
                {payload[0].payload.air_temperature} °C
            </Typography>
            <Typography>
                <Box component="span" className={classes.contentLabel} color="primary"> Chance of Rain: </Box>
                {payload[0].payload.probability_of_precipitation} %
                    </Typography>
            <Box className={classes.iconWrapper}>
                <Umbrella fontSize="large" aria-hidden={true} className={classes.iconRotate} color="primary" />
            </Box>
        </Box>
    )
};

export default CustomTooltipContent;
