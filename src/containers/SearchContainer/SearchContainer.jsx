import React from 'react';
import Input from '../../components/SearchInput/SearchInput'
import { Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { searchData } from '../../redux/actions/search'

const SearchContainer = (props) => {
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        dispatch(searchData({ search: data.searchInput }))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1} alignItems='center' justify='center' >
                <Grid item xs={9}>
                    <Input reference={register} />
                </Grid>
            </Grid>
        </form>
    );

}

export default SearchContainer