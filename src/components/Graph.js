import React, { useState, useEffect, useContext } from 'react';
import GeoContext from '../geoContext';
import axios from 'axios';

const Graph = () => {
    const geoState = useContext(GeoContext);
    const [chartData, setChartData] = useState();

    useEffect(() => {
        axios.get(`https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=0&lat=${geoState.locationInfo.latitude}&lon=${geoState.locationInfo.longitude}`)
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
    }, [])

    return (
        <>

        </>
    );
};

export default Graph;
