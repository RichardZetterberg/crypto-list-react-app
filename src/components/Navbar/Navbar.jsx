import React from 'react'
import { Row, Typography, Avatar, Menu, Image } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, DollarCircleOutlined, BulbOutlined } from '@ant-design/icons';
import navbarLogo from '../../static/navbar-logo.svg'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <Row justify='space-around'>
            <Typography.Title level={2} className="logo">
                <Link to="/">CryptoInfo</Link>
            </Typography.Title>
            <Avatar src={navbarLogo} style={{marginTop:'8px'}}/>
        </Row>
        <Menu theme="dark" style={{backgroundColor:'var(--text-primary)'}}>
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
