import React, { Component } from 'react';
import { Layout, Card, Form, Icon, Input, Button, Select, Tag} from 'antd';
import Sidebar from '../components/Sidebar';

class Details extends Component {

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    onSearch(val) {
        console.log('search:', val);
    }

    render() {
        const { values } = this.props;
        const Option = Select.Option;
        const { Content } = Layout;

        return(
            
            <Layout>
                <Sidebar step={this.props.step} />
                <Layout>
                    <Content style={{backgroundColor: '#1890ff', height: '100vh', display: 'flex', alignItems: 'center'}}>
                        <Card style={{margin: '0 auto', width: '500px'}}>
                            <Form className="login-form">
                                <Form.Item>
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.props.handleChange('firstname')} placeholder="First Name" name="firstname" value={values.firstname}/>
                                </Form.Item>
                                <Form.Item>
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.props.handleChange('lastname')} placeholder="Last Name" name="lastname" value={values.lastname}/>
                                </Form.Item>
                                <Form.Item>
                                    <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.props.handleChange('phone')} placeholder="Phone Number" name="phone" type="tel" value={values.phone}/>
                                </Form.Item>
                                <Form.Item>
                                    <Input prefix={<Icon type="bank" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.props.handleChange('company')} placeholder="Company" name="company" value={values.company}/>
                                </Form.Item>
                                    <Form.Item>
                                    <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.props.handleChange('email')} placeholder="Email Address" name="email" type="email" value={values.email}/>
                                </Form.Item>
                                <Form.Item>
                                    <Select
                                        showSearch
                                        placeholder="Our Available Cities"
                                        optionFilterProp="children"
                                        onChange={this.props.handleSelect}
                                        onSearch={this.onSearch}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        <Option value="tucson">Tucson, Arizona</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item>
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

export default Details;