import React, { Fragment } from 'react'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'
// import { animateScroll as scroll } from "react-scroll";
import FooterRights from '../../features/FooterRights';
import './Footer.css'

const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <Fragment>
            <Row justify='space-around' className='footer'>
                <Col span={8}>
                    <Row justify='center'>
                        {/* {scrollToTop('/', 'Home')} */}
                        <Link to='/' onClick={scrollToTop}>Home</Link>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row justify='center'>
                        {/* {scrollToTop('/cryptos', 'Cryptos')} */}
                        <Link to='/cryptos'onClick={scrollToTop}> Cryptos </Link>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row justify='center'>
                        {/* {scrollToTop('/news', 'News')} */}
                        <Link to='/news' onClick={scrollToTop}>News</Link>
                    </Row>
                </Col>
            </Row>
            <FooterRights />
        </Fragment>
    )
}

export default Footer
