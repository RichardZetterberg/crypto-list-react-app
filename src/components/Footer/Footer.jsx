import React from 'react'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <Row justify='space-around' className='footer'>
        <Col span={8}>
            <Row justify='center'>
                <Link to='/'>Home</Link>
            </Row>
        </Col>
        <Col span={8}>
            <Row justify='center'>
                <Link to='/cryptos'> Cryptos </Link>
            </Row>
        </Col>
        <Col span={8}>
            <Row justify='center'>
                <Link to='/news'>News</Link>
            </Row>
        </Col>
    </Row>
  )
}

export default Footer
