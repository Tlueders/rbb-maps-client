import React, {Component} from 'react';
import Logo from '../assets/rbb-logo-dark.png';
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

    render(){
        const { values } = this.props;
        const { Sider, Content } = Layout;
        return(
            <Layout>
                <Sidebar step={this.props.step} />
                <Layout>
                    <Content style={{backgroundColor: '#1890ff', height: '100vh', display: 'flex', alignItems: 'center'}}>
                        <Card style={{margin: '0 auto', width: '500px'}}>
                            <Form className="login-form">
                                <Form.Item>
                                    {/*<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.props.handleChange('')} placeholder="First Name" name="firstname" value={}/>*/}
                                </Form.Item>
                                <Form.Item>
                                    <Button onClick={this.prevStep} type="default" htmlType="submit" className="login-form-button" block>
                                        Previous Step
                                    </Button>
                                    <Button onClick={this.saveAndContinue} type="primary" htmlType="submit" className="login-form-button" block>
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