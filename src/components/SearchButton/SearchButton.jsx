import React from 'react';
import { Button } from '@material-ui/core';
/* 
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#007cc6',
      },
      secondary: {
        main: '#f44336',
      },
    },
  });
  */
const SearchButton = (props) => {

    return (
        <Button variant="contained" color="primary" onClick={props.submitHandler} onFocusVisible={false} buttonRef={props.reference}>
            Search
        </Button>
    );

}

export default SearchButton