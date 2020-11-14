import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapBoxGL from 'react-map-gl';

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 55.6867243,
        longitude: 12.5700724,
        width: '100vw',
        height: '100vh',
        zoom: 10
    });
    const [playgrounds, setPlaygrounds] = useState();

    useEffect(() => {
        axios.get('https://wfs-kbhkort.kk.dk/k101/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=k101:legeplads&outputFormat=json&SRSNAME=EPSG:4326')
            .then((playgroundData) => {
                const filteredData = playgroundData.data.features.filter(feature => feature.geometry);
                setPlaygroundData(filteredData);
            })
    }, []);

    return (
        <MapBoxGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPACCESS_TOKEN}
            onViewportChange={(nextViewport => setViewport(nextViewport))}
        >

        </MapBoxGL>
    );
};

export default Map;
