import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import 'leaflet/dist/leaflet.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './views/Login';
import MapView from './views/Map';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/map" exact component={MapView} />
        </div>
      </Router>
    );
  }
}

export default App;
