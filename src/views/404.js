import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
    render(){
        return(
            <div>
                <h1>404, This Page does not exist.</h1>
                <Link to="/">Go Back To Start.</Link>
            </div>
        );
    }
}

export default NoMatch;