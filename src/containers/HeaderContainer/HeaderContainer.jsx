import React from 'react';
import { Grid } from '@material-ui/core';
import Logo from '../../components/Logo/Logo'
import SearchContainer from '../SearchContainer/SearchContainer'
import { makeStyles } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#007cc6'
    }
});

const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#fafafa',
            light: '#fafafa',
            dark: '#fafafa',
            //contrastText: '#fafafa'
        },
        text: {
            primary: '#fafafa',
            secondary: '#fafafa',
            disabled: '#fafafa',
            hint: '#fafafa',
            divider: '#fafafa'
        }
    },
});


const Header = () => {
    const classes = useStyles();

    return (
        <Grid container alignItems='center' justify='center' className={classes.root} >
            <Grid item>
                <Logo />
            </Grid>
            <Grid item xs={10} >
                <ThemeProvider theme={theme}>
                    <SearchContainer />
                </ThemeProvider>
            </Grid>
        </Grid>

    );
}

export default Header