import React, { Component } from 'react';
import { Row, Col, Card, Form, Icon, Input, Button } from 'antd';
import { Link } from "react-router-dom";

class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        return(
            <div>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}>
                        <Card>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item>
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                </Form.Item>
                                <Form.Item>
                                <div className="flex column">
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                    <Col span={24}><Link to="/register">register now!</Link></Col>
                                </div>
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