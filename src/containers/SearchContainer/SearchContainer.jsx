import React from 'react';
import Input from '../../components/SearchInput/SearchInput'
import Button from '../../components/SearchButton/SearchButton'
import { Grid } from '@material-ui/core';

const SearchContainer = (props) => {

    const submitHandler = () => {
        console.log('CLICK!')
    }

    return (
        <form>
            <Grid container spacing={2} alignItems='center' justify='center' >
                <Grid item xs={8} style={{ backgroundColor: 'white' }}>
                    <Input />
                </Grid>
                <Grid item >
                    <Button submitHandler={submitHandler} />
                </Grid>
            </Grid>
        </form>
    );

}

export default SearchContainer