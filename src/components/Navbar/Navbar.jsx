import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import { Row, Col, Typography, Avatar, Menu, Button } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, DollarCircleOutlined, BulbOutlined, MenuOutlined, ArrowUpOutlined } from '@ant-design/icons';
import navbarLogo from '../../static/navbar-logo.svg'
import "./Navbar.css"

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [visibleBtn, setVisibleBtn] = useState(false)
    const [scrollTop, setScrollTop] = useState(500);
    const [selectedItem, setSelectedItem] = useState(null);

    const navigate = useNavigate();
    const {pathname}  = useLocation();

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };

    const addressToHome = () => {
        navigate("/");
        // console.log('');
    }
    
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const menuItems = [
        {
            name: '/',
            key: '1'
        },
        {
            name: '/cryptos',
            key: '2'
        },
        {
            name: '/news',
            key: '3'
        }
    ]

    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
            setVisibleBtn(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    useEffect(() => {
        menuItems.map((item) => {
            if (item.name === pathname) {
                setSelectedItem(item.key);
            }
        })
    }, [pathname]);
    
    return (
        <div className={collapsed ? 'navbar' : 'navbar-full'}>
            <Row justify='end'>
                <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 20 }}>
                    <MenuOutlined />
                </Button>
            </Row>

            <Menu
                theme="dark" 
                style={{
                    backgroundColor:'var(--text-primary)',
                }}
                inlineCollapsed={collapsed}
                mode="inline"
            >
                {!collapsed ? (
                    <Row justify='space-between'>
                        <Col span={16}>
                            <Row justify='end'>
                                <Typography.Title level={3} className="logo">
                                    <Link to="/">CryptoInfo</Link>
                                </Typography.Title>
                            </Row>
                        </Col>
                        <Col span={6}>
                            <Avatar 
                                className='avatar-logo'
                                src={navbarLogo} 
                                onClick={addressToHome}
                            />
                        </Col>
                    </Row>
                    ) : (
                        <Row justify='center'>
                            <Avatar
                                className='avatar-logo' 
                                src={navbarLogo} 
                                style={{margin:'8px 0 8px 0'}} 
                                onClick={addressToHome}
                            />
                        </Row>
                    )
                }
                
                <Menu.Item
                    icon={<HomeOutlined />}
                    key='1'
                    style={{
                      backgroundColor: selectedItem === '1' ? '#243845' : 'transparent',
                      borderRadius: '10px'
                    }}
                >
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item 
                    key='2' 
                    icon={<DollarCircleOutlined />}
                    style={{
                        backgroundColor: selectedItem === '2' ? '#243845' : 'transparent',
                        borderRadius: '10px'
                    }}
                >
                    <Link to='/cryptos'>
                        Cryptos
                    </Link>
                </Menu.Item>
                <Menu.Item 
                    key='3' 
                    icon={<BulbOutlined />}
                    style={{
                        backgroundColor: selectedItem === '3' ? '#243845' : 'transparent',
                        borderRadius: '10px'
                    }}
                >
                    <Link to='/news'>
                        News
                    </Link>
                </Menu.Item>
            </Menu>
            
            {visibleBtn ? (
                <Row justify='center'>
                    <Button 
                        type="primary"
                        shape="circle"
                        icon={<ArrowUpOutlined />}
                        size={"large"}
                        className='nav-btn-top'
                        onClick={scrollToTop}
                    >
                    </Button>
                </Row>
            ):(<></>)}

            
        </div>
  )
}

export default Navbar;
