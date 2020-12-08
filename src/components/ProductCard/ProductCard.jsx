import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 250,
    },
    discount: {
        color: 'white',
        backgroundColor: 'red',
        borderRadius: '20%'
    }
});

const ProductCard = (props) => {
    const classes = useStyles();

    const renderDiscount = () => {
        console.log(props)
        if (props.original_amount !== props.discounted_amount) {
            return (<Grid item>
                <Typography variant='caption' component="p" >
                    $<strike>{props.original_amount}</strike>  <small className={classes.discount}>%{props.discount} </small>
                </Typography>
                <Typography variant='caption'>
                    ${props.discounted_amount}
                </Typography>
            </Grid>)
        }else{
            return (<Grid item>
                <Typography variant='caption' component="p" >
                    ${props.original_amount}
                </Typography>
                <Typography variant='caption' component="p"></Typography>
            </Grid>)
        }

    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia component="img"
                    image='https://techcrunch.com/wp-content/uploads/2019/05/NextDay-Delivery-Box-Image.jpg?w=1390&crop=1' />
                <CardContent>
                    <Grid container direction='column' spacing={1} >
                        <Grid item>
                            <Typography variant="h5" component="h2">
                                {props.brand}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.description}
                            </Typography>
                        </Grid>
                        {renderDiscount(props)}
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );

}

export default ProductCard