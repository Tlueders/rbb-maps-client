import React, { Component } from 'react';

import Details from './Details';
import Map from './Map';

class Order extends Component {
    constructor() {
        super();

        this.state = {
            step: 1,
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            company: '',
            city: '',
            home: {
                lat: 51.505,
                lng: -0.09
            },
            markers: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.addMarker = this.addMarker.bind(this);
    };

    // handleSubmit = (e) => {
    //     const {firstname, lastname, phone, email, company, city} = this.state;
    //     const form = {firstname, lastname, phone, email, company, city};
    //     e.preventDefault();
    //     axios.post('/customers', form)
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    addMarker = (e) => {
        const {markers} = this.state;
        markers.push(e.latlng);
        this.setState({markers});
    }


    deleteSign = (idx) => {
        const markers = this.state.markers;
        markers.splice(idx, 1);
        this.setState({ markers });
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    handleSelect(value) {
       this.setState({
           city: value
       });
    }

    render(){
            const { step } = this.state;
            const { firstname, lastname, phone, email, company, city, home } = this.state;
            const values = { firstname, lastname, phone, email, company, city, home };

            switch(step) {
            case 1:
                return <Details 
                        step={this.state.step}
                        nextStep={this.nextStep} 
                        handleChange={this.handleChange}
                        handleSelect={this.handleSelect}
                        values={values}
                        />
            case 2:
                return <Map
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        onClick={this.addMarker}
                        deleteSign={this.deleteSign}
                        markers={this.state.markers}
                        home={this.state.home}
                        />
            default:
                break;
        }
    }
}

export default Order;