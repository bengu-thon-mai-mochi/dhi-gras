import React, { useState } from 'react';
import MapBoxGL from 'react-map-gl';

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 55.6867243,
        longitude: 12.5700724,
        width: '100vw',
        height: '100vh',
        zoom: 10
    })

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
