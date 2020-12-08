import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './redux/store';
import Home from './pages/home'

function App() {

  const store = configureStore()

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;