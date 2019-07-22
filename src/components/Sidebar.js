import React, { Component } from 'react';
import { Layout, Tag } from 'antd';
import Logo from '../assets/rbb-logo-dark.png';

class Sidebar extends Component {
    render(props){
        const { Sider } = Layout;
        return(
            <Sider width={300} theme="light" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: '2rem'}}>
                <img style={{width:'100px'}} src={Logo} alt="RBB Maps"/> <br/>
                <Tag color="#1890ff" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '25px 0'}}>Step {this.props.step}</Tag>
                {this.props.children}
            </Sider>
        );
    }
}

export default Sidebar;