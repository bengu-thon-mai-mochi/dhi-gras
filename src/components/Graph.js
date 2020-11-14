import React, { useState, useContext } from 'react';
import GeoContext from '../geoContext';
import {  AreaChart, Area, Tooltip, XAxis, YAxis, Legend } from 'recharts';
import axios from 'axios';

const Graph = () => {
    const { 
        locationInfo : {
            latitude, 
            longitude
        } 
    }= useContext(GeoContext);
    const [chartData, setChartData] = useState();

    axios.get(`https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=0&lat=${latitude}&lon=${longitude}`)
        .then(weatherData => {
            const timeseries = weatherData.data.properties.timeseries;

            const selectedData = timeseries.map(data => {
                return {
                    time: data.time,
                    air_temperature: data.data.instant.details.air_temperature
                }
            });

            setChartData(selectedData);
        })

    return (
        <>
            <AreaChart
                data={chartData}
                width={500}
                height={400}
            >
                <XAxis dataKey="time" name="time" domain={['auto', 'auto']} />
                <YAxis dataKey="air_temperature" name="temperature" unit="C" />
                <Area type="monotone" dataKey="air_temperature" fill="#8884d8" stroke="#8884d8" lineJointType="monotoneX" />
                <Tooltip />
                <Legend />
            </AreaChart>
        </>
    );
};

export default Graph;
