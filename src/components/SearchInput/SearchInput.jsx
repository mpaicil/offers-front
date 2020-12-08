import React from 'react';
import { TextField } from '@material-ui/core';

const SearchInput = (props) => {

    return (
        <TextField id="outlined-search" 
        label="Search products by id or text"
         type="search" 
         variant="outlined" 
         size='small'
         fullWidth={true}
         />
    );

}

export default SearchInput