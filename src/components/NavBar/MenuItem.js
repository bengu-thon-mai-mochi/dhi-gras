import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, IconButton } from '@material-ui/core';

const MenuItem = ({ url, text, iconComponent }) => {
    const history = useHistory();

    return (
        <IconButton color="inherit" onClick={() => history.push(url)}>
            <Typography variant="h5">
                {text}
            </Typography>
            {iconComponent}
        </IconButton>
    )
};

export default MenuItem;
