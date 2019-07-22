import React, {Component} from 'react';
import { Layout, Card, Form, Icon, Input, Button} from 'antd';
import Sidebar from '../components/Sidebar';

class Address extends Component {

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    prevStep = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }

    findAddress = (e) => {
        e.preventDefault()
        this.props.findAddress()
    }

    render(){
        const { values } = this.props;
        const { Content } = Layout;
        return(
            <Layout>
                <Sidebar step={this.props.step} />
                <Layout>
                    <Content style={{backgroundColor: '#1890ff', height: '100vh', display: 'flex', alignItems: 'center'}}>
                        <Card style={{margin: '0 auto', width: '500px'}}>
                            <Form className="login-form">
                                <Form.Item>
                                    <Input prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.props.handleChange('address')} placeholder="123 S RBB Lane" name="address" value={values.address}/>
                                </Form.Item>
                                <Form.Item>
                                    <p>{values.address}</p>
                                    <p>{values.city}, arizona</p>
                                </Form.Item>
                                <Form.Item>
                                    <Button onClick={this.prevStep} type="default" htmlType="submit" className="login-form-button" block>
                                        Previous Step
                                    </Button>
                                    <Button onClick={this.findAddress} type="primary" htmlType="submit" className="login-form-button" block>
                                        Next Step
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Address;