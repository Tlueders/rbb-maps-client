import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import 'leaflet/dist/leaflet.css';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Order from './views/Order';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Order} />
        </div>
      </Router>
    );
  }
}

export default App;
