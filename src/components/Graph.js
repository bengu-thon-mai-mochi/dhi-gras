import React, { useState, useContext, useEffect } from 'react';
import GeoContext from '../geoContext';
import { AreaChart, Area, Tooltip, XAxis, YAxis, Legend } from 'recharts';
import axios from 'axios';
import { Box, Card, CardHeader, CardContent, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: "20px"
    },
    cardStyle: {
        paddingTop: "20px",
        textAlign: 'center'
    }
})

const Graph = () => {
    const classes = useStyles();

    const {
        locationInfo: {
            latitude,
            longitude,
            name,
            checked
        }
    } = useContext(GeoContext);
    const [chartData, setChartData] = useState();

    useEffect(() => {
        axios.get(`https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=0&lat=${latitude}&lon=${longitude}`)
            .then(weatherData => {
                const timeseries = weatherData.data.properties.timeseries.slice(0, 13);

                const selectedData = timeseries.map(data => {
                    const date = new Date(data.time);
                    const hour = date.getHours();
                    if (hour === 0) {
                        return {
                            time: 24,
                            air_temperature: data.data.instant.details.air_temperature
                        }
                    } else {
                        return {
                            time: hour,
                            air_temperature: data.data.instant.details.air_temperature
                        }
                    }
                });

                setChartData(selectedData);
            })
    }, [latitude, longitude])

    return (
        <>
            <Box className={classes.root}>
                <Card className={classes.cardStyle}>
                    <CardContent>
                        <Fade in={checked}
                            {...(checked ? { timeout: 4000 } : {})}>
                            <AreaChart
                                data={chartData}
                                width={800}
                                height={400}
                            >
                                <defs>
                                    <linearGradient id="temperatureGradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="20%" stopColor="#ff6000" />
                                        <stop offset="100%" stopColor="#b3b3f2" />
                                    </linearGradient>
                                </defs>
                                <XAxis orientation="top" tickCount={13} fontSize={24} padding={{ left: 20, right: 20 }} tickLine={false} dataKey="time" name="time" domain={['dataMin', 'dataMax']} />
                                <YAxis dataKey="air_temperature" name="Temperature" unit="C" />
                                <Area dataKey="air_temperature" name="Temperature" type="basis" fill="url(#temperatureGradient)" stroke="#5ac322" strokeWidth={2} />
                                <Tooltip />
                                <Legend />
                            </AreaChart>
                        </Fade>
                    </CardContent>
                    <CardHeader title={`Temperature at ${name} next 12 hours`} />
                </Card>
            </Box>
        </>
    );
};

export default Graph;
