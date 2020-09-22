import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import MainLayout from '../MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FAQ from '../FAQ/FAQ';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/FAQ' component={FAQ} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;