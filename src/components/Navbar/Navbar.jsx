import React, { useState } from 'react'
import { Row, Col, Typography, Avatar, Menu, Button } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, DollarCircleOutlined, BulbOutlined, MenuOutlined } from '@ant-design/icons';
import navbarLogo from '../../static/navbar-logo.svg'
import "./Navbar.css"

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };
    
  return (
    <div className={collapsed ? 'navbar' : 'navbar-full'}>
        <Row justify='end'>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 20 }}>
                <MenuOutlined />
            </Button>
        </Row>

        <Menu
            theme="dark" 
            style={{backgroundColor:'var(--text-primary)'}}
            inlineCollapsed={collapsed}
            mode="inline"
        >
            {!collapsed ? (
                <Row justify='space-between'>
                    <Col span={18}>
                        <Row justify='end'>
                            <Typography.Title level={2} className="logo">
                                <Link to="/">CryptoInfo</Link>
                            </Typography.Title>
                        </Row>
                    </Col>
                    <Col span={5}>
                        <Avatar src={navbarLogo} style={{marginTop:'8px'}}/>
                    </Col>
                </Row>
                ) : (
                    <Row justify='center'>
                        <Avatar src={navbarLogo} style={{margin:'8px 0 8px 0'}}/>
                    </Row>
                )
            }
            
            <Menu.Item key='1' icon={<HomeOutlined />}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key='2' icon={<DollarCircleOutlined />}>
                <Link to='/cryptos'>
                    Cryptos
                </Link>
            </Menu.Item>
            <Menu.Item key='3' icon={<BulbOutlined />}>
                <Link to='/news'>
                    News
                </Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default Navbar;
