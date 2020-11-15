import React, { useState, useContext, useEffect } from 'react';
import GeoContext from '../geoContext';
import { AreaChart, Area, Tooltip, XAxis, YAxis, Legend } from 'recharts';
import axios from 'axios';
import { Card, CardHeader, CardContent } from '@material-ui/core';

const Graph = () => {
    const {
        locationInfo: {
            latitude,
            longitude,
            name
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
                console.log(selectedData)
            })
    }, [])

    return (
        <>
            <Card>
                <CardHeader title={`Temperature at ${name} next 12 hours`} />
                <CardContent>
                    <AreaChart
                        data={chartData}
                        width={500}
                        height={400}
                    >
                        <defs>
                            <linearGradient id="temperatureGradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="20%" stopColor="#ff6000" />
                                <stop offset="100%" stopColor="#b3b3f2" />
                            </linearGradient>
                        </defs>
                        <XAxis orientation="top" type="number" tickCount={12} dataKey="time" name="time" domain={['dataMin', 'dataMax']} />
                        <YAxis dataKey="air_temperature" name="Temperature" unit="C" />
                        <Area dataKey="air_temperature" name="Temperature" type="basis" fill="url(#temperatureGradient)" stroke="#8884d8" />
                        <Tooltip />
                        <Legend />
                    </AreaChart>
                </CardContent>
            </Card>
        </>
    );
};

export default Graph;
