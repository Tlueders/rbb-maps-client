import React, { Component } from 'react';
import { Row, Col, Card, Form, Icon, Input, Button, Select, Tag} from 'antd';

class Login extends Component {

    constructor() {
        super();

        this.state = {
            step: 1,
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            city: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    handleSubmit = (e) => {
        const {firstname, lastname, phone, email, city} = this.state;
        const form = {firstname, lastname, phone, email, city};
        e.preventDefault();
        console.log(form);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSelect(value) {
       this.setState({
           city: value
       });
    }

    onSearch(val) {
        console.log('search:', val);
    }


    render() {
        const Option = Select.Option;

        return(
            <div>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}>
                        <Card>
                            <Tag color="#1890ff" style={{margin: '10px 0px'}}>Step {this.state.step}</Tag>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.handleChange} placeholder="First Name" name="firstname" value={this.state.firstname}/>
                                </Form.Item>
                                <Form.Item>
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.handleChange} placeholder="Last Name" name="lastname" value={this.state.lastname}/>
                                </Form.Item>
                                <Form.Item>
                                    <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.handleChange} placeholder="Phone Number" name="phone" value={this.state.phone} type="tel"/>
                                </Form.Item>
                                 <Form.Item>
                                    <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.handleChange} placeholder="Email Address" name="email" value={this.state.email} type="email"/>
                                </Form.Item>
                                <Form.Item>
                                    <Select
                                        showSearch
                                        placeholder="Our Available Cities"
                                        optionFilterProp="children"
                                        onChange={this.handleSelect}
                                        onSearch={this.onSearch}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        <Option value="tucson">Tucson, Arizona</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button" block>
                                        Next Step
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                    <Col span={6}></Col>
                </Row>
            </div>
        );
    }
}

export default Login;