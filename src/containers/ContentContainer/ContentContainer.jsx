import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchData } from '../../redux/actions/search'
import { Grid } from '@material-ui/core';
import ProductCard from '../../components/ProductCard/ProductCard'

const Content = (props) => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState(new Array())

    const datos = useSelector(state => {
        if (state.search.results !== undefined)
            return state.search.results.products
    })

    useEffect(() => {
        if (datos === undefined) {
            const results = dispatch(searchData({ search: 'Televi' }))
        } else {
            setProducts(datos)
        }

    })

    const renderProducts = () => {
        return products.map((product) => <Grid item>
            <ProductCard brand={product.brand}
                description={product.description}
                original_amount={product.prices.original}
                discounted_amount={product.prices.discounted}
                discount={product.prices.appliedDiscount} />
        </Grid>
        )
    }

    return (
        <Grid container spacing={2} justify='space-evenly'>
            {renderProducts()}
        </Grid>

    );
}

export default Content