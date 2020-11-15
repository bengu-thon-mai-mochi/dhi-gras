import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Space from './components/Space';
import Time from './components/Time';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import GeoContext from './geoContext';


const App = () => {
  const [locationInfo, setLocationInfo] = useState();

  return (
    <>
      <CssBaseline />
      <GeoContext.Provider value={{ locationInfo, setLocationInfo }} >
        <ThemeProvider theme={theme}>
          <Switch>
            <Layout>
              <Route exact path="/" component={Home} />
              <Route exact path="/Space" component={Space} />
              <Route exact path="/Time" component={Time} />
            </Layout>
          </Switch>
        </ThemeProvider>
      </GeoContext.Provider>
    </>
  );
};

export default App;
