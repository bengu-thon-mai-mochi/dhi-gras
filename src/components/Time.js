import React, { useContext } from 'react';
import Graph from './Graph';
import GeoContext from '../geoContext';

const Time = () => {
    const geoState = useContext(GeoContext);

    return (
        <>
            {
                geoState.locationInfo
                    ?
                    <Graph />
                    :
                    <div>Please go to map and pick a location</div>
            }
        </>
    );
};

export default Time;
