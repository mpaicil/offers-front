import React from 'react';
import { Grid } from '@material-ui/core';
import Logo from '../../components/Logo/Logo'
import SearchContainer from '../SearchContainer/SearchContainer'
import { makeStyles } from '@material-ui/core'

const Header = () => {

    return (
        <Grid container alignItems='center' justify='center' style={{ backgroundColor: '#007cc6'}} >
            <Grid item>
                <Logo />
            </Grid>
            <Grid item xs={10} >
                <SearchContainer />
            </Grid>
        </Grid>

    );
}

export default Header