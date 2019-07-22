import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import 'leaflet/dist/leaflet.css';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Order from './views/Order';
import NoMatch from './views/404';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Order} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
