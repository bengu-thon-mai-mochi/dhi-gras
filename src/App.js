import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Space from './components/Space';
import Time from './components/Time';
import { CssBaseline } from '@material-ui/core';
import GeoContext from './geoContext';


const App = () => {
  const [locationInfo, setLocationInfo] = useState();

  return (
    <>
      <CssBaseline />
      <GeoContext.Provider value={{ locationInfo, setLocationInfo }} >
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/Space" component={Space} />
            <Route exact path="/Time" component={Time} />
          </Layout>
        </Switch>
      </GeoContext.Provider>
    </>
  );
};

export default App;
