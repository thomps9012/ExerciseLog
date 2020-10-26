import React from 'react';
import Typography from '@material-ui/core/Typography';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Created by © Sander de Bruijn, Adapted by Samuel Thompson '}
        {new Date().getFullYear()}
        {'.'}
        <br></br>
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </Typography>
    );
}

export default Copyright;