import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchData } from '../redux/actions/search'
import Header from '../containers/HeaderContainer/HeaderContainer'
import Content from '../containers/ContentContainer/ContentContainer'
import { Container, Grid } from '@material-ui/core'
import search from '../redux/sagas/search'
import { get } from 'lodash'

const Home = (props) => {
    /*
    const dispatch = useDispatch()

    const datos = useSelector(state => {
        get(state, 'state.search.results.products')
    })

    useEffect(() => {
        console.log(dispatch)
        if (datos === undefined) {
            const results = dispatch(searchData({ search: '150' }))
            console.log(`el resultado: ${results}`)
            console.log(results)
        }
    })
    */

    return (
        <Container maxWidth='lg'>
            <Grid container direction='column'>
                <Grid item>
                    <Header />
                </Grid>
                <Grid item>
                    <Content />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home