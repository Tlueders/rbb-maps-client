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
            signs: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    };

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

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    handleSelect(value) {
       this.setState({
           city: value
       });
    }

    render(){
            const {step} = this.state;
            const { firstname, lastname, phone, email, company, city, home, signs } = this.state;
            const values = { firstname, lastname, phone, email, company, city, home, signs};

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
                        handleChange = {this.handleChange}
                        values={values}
                        />
        
            default:
                break;
        }
    }
}

export default Order;