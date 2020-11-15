import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import MapBoxGL, { Marker, Popup } from 'react-map-gl';
import { IconButton, Button, Box, Typography } from '@material-ui/core';
import PlaceIcon from '@material-ui/icons/Place';
import GeoContext from '../geoContext';
import { makeStyles } from '@material-ui/core/styles';

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


const Map = () => {
    const classes = useStyles();

    const [viewport, setViewport] = useState({
        latitude: 55.6867243,
        longitude: 12.5700724,
        width: '100vw',
        height: '100vh',
        zoom: 10
    });
    const [playgrounds, setPlaygrounds] = useState();
    const [selectedPlayground, setSelectedPlayground] = useState();
    const { setLocationInfo } = useContext(GeoContext);
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
                        }}>
                            <PlaceIcon />
                        </IconButton>
                    </Marker>)
                :
                <Box className={classes.root}>
                    <Box className={classes.containerStyle}>
                        <Typography variant="h4"> Loading </Typography>
                    </Box>
                </Box>
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
                        setLocationInfo({
                            latitude: selectedPlayground.geometry.coordinates[0][1],
                            longitude: selectedPlayground.geometry.coordinates[0][0],
                            name: selectedPlayground.properties.navn,
                            checked: true
                        });

                        history.push('/time');
                    }
                    }>See temperature</Button>
                </Popup>
            }
        </MapBoxGL >
    );
};

export default Map;
