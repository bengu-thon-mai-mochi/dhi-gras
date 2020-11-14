import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import MapBoxGL, { Marker, Popup } from 'react-map-gl';
import { IconButton, Button } from '@material-ui/core';
import PlaceIcon from '@material-ui/icons/Place';
import GeoContext from '../geoContext';

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 55.6867243,
        longitude: 12.5700724,
        width: '100vw',
        height: '100vh',
        zoom: 10
    });
    const [playgrounds, setPlaygrounds] = useState();
    const [selectedPlayground, setSelectedPlayground] = useState();
    const geoState = useContext(GeoContext);
    const history = useHistory();

    useEffect(() => {
        axios.get('https://wfs-kbhkort.kk.dk/k101/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=k101:legeplads&outputFormat=json&SRSNAME=EPSG:4326')
            .then((playgroundData) => {
                const filteredData = playgroundData.data.features.filter(feature => feature.geometry);
                setPlaygrounds(filteredData);
            })
    }, []);

    return (
        <MapBoxGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPACCESS_TOKEN}
            onViewportChange={(nextViewport => setViewport(nextViewport))}
        >
            {playgrounds ?
                playgrounds.map(playground =>
                    < Marker
                        key={playground.id}
                        latitude={playground.geometry.coordinates[0][1]}
                        longitude={playground.geometry.coordinates[0][0]}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <IconButton onClick={(e) => {
                            e.preventDefault();
                            setSelectedPlayground(playground);
                            console.log(playground)
                        }}>
                            <PlaceIcon />
                        </IconButton>
                    </Marker>)
                :
                <div>Loading</div>
            }
            {
                selectedPlayground && <Popup
                    latitude={selectedPlayground.geometry.coordinates[0][1]}
                    longitude={selectedPlayground.geometry.coordinates[0][0]}
                    closeButton={true}
                    closeOnClick={false}
                    onClose={() => setSelectedPlayground(null)}
                    tipSize={16}
                    offsetLeft={10}
                    offsetTop={33}
                >
                    <Button onClick={() => {
                        geoState.setLocationInfo({
                            latitude: selectedPlayground.geometry.coordinates[0][1],
                            longitude: selectedPlayground.geometry.coordinates[0][0],
                            name: selectedPlayground.properties.navn
                        }); history.push('/time');
                    }
                    }>See temperature</Button>
                </Popup>
            }
        </MapBoxGL >
    );
};

export default Map;
