import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Space from './components/Space';
import Time from './components/Time';
import { CssBaseline } from '@material-ui/core';



const App = () => {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/Space" component={Space} />
          <Route exact path="/Time" component={Time} />
        </Layout>
      </Switch>
    </>
  );
};

export default App;
