import React from 'react'
import Header from '../containers/HeaderContainer/HeaderContainer'
import Content from '../containers/ContentContainer/ContentContainer'
import { Container, Grid } from '@material-ui/core'

const Home = (props) => {

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