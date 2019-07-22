import React, { Component } from 'react';
import Details from './Details';
import Address from './Address';
import Map from './Map';
import axios from 'axios';

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
            address: '',
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

    findAddress = () => {
        const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
        const address = (this.state.address).replace(/\s+/g, '+');
        const { step } = this.state
        axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${address},+${this.props.city},+AZ&key=${API_KEY}`)
            .then(res => {
                console.log(res.data.results[0].geometry.location);
                this.setState({
                    home: {
                        lat: res.data.results[0].geometry.location.lat,
                        lng: res.data.results[0].geometry.location.lng
                    },
                    step: step + 1 
                });
            })
            .catch(err => {
                console.log(err);
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
            const { firstname, lastname, phone, email, company, city, home, address, markers } = this.state;
            const values = { firstname, lastname, phone, email, company, city, home, address, markers };

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
                return <Address
                        step={this.state.step}
                        nextStep={this.nextStep} 
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        findAddress={this.findAddress}
                        values={values}
                        />
            case 3:
                return <Map
                        step={this.state.step}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        onClick={this.addMarker}
                        deleteSign={this.deleteSign}
                        markers={this.state.markers}
                        home={this.state.home}
                        values={values}
                        />
            default:
                break;
        }
    }
}

export default Order;