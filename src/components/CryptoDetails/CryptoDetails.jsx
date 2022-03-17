import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser';
import {useParams} from 'react-router-dom';
import millify from 'millify';
import {Col, Row, Typography, Select} from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../../services/cryptoApi';
import LineChart from '../LineChart/LineChart';
import './CryptoDetails.css'

const {Title, Text} = Typography;
const { Option } = Select;

const CryptoDetails = () => {
    const { coinUUID } = useParams();
    const [timePeriod, setTimePeriod] = useState('7d');
    const {data, isFetching} = useGetCryptoDetailsQuery(coinUUID);
    const {data: coinHistory } = useGetCryptoHistoryQuery({ coinUUID, timePeriod });
    const cryptoDetails = data?.data?.coin;

    if(isFetching) return 'Lodaing...';
    console.log(coinHistory);

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
        { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
        { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
        { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
        { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
        { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
    ];

    return (
        <Col span={24} className='coin-detail-container'>
            <Col
                span={24}
                className="coin-heading-container"
            >
                <Row justify='center'>
                    <Title level={2} className="coin-name">
                        {cryptoDetails.name} ( {cryptoDetails.symbol} ) Price
                    </Title>
                </Row>
                <Row justify='center'>
                    <p>
                        {cryptoDetails.name} live price in US dollars.
                        View value statistics, market cap and supply. 
                    </p>
                </Row>
            </Col>
            
            <Select
                defaultValue="7d"
                className='select-time-period'
                placeholder="Select time period"
                onChange={(value) => setTimePeriod(value)}
            >
                {time.map((date) => <Option key={date}>{date}</Option>)}
            </Select>

            {/* <LineChart 
                coinHistory={coinHistory}
                currencyPrice={millify(cryptoDetails.price)}
                coinName={cryptoDetails.name}
            /> */}

            <Col className="stats-container">
                <Col span={12}>
                    <Col className="coin-value-statistics-heading">
                        <Title level={3} className="coin-details-heading">
                            {cryptoDetails.name} Value Statistics
                        </Title>
                        <p>
                            An overview showing the stats of {cryptoDetails.name}
                        </p>
                    </Col>

                    {stats.map(({ icon, title, value }) => (
                        <Col className="coin-stats">
                            <Col className="coin-stats-name">
                                <Text>{icon}</Text>
                                <Text>{title}</Text>
                            </Col>
                            <Text className="stats">{value}</Text>
                        </Col>
                    ))}
                </Col>

                <Col span={12}>
                    <Col className="coin-value-statistics-heading">
                        <Title level={3} className="coin-details-heading">
                            Other Statistics
                        </Title>
                        <p>
                            An overview showing the stats of all cryptocurrencies
                        </p>
                    </Col>
                    {genericStats.map(({ icon, title, value }) => (
                        <Col className="coin-stats">
                            <Col className="coin-stats-name">
                                <Text>{icon}</Text>
                                <Text>{title}</Text>
                            </Col>
                            <Text className="stats">{value}</Text>
                        </Col>
                    ))}
                </Col>
            </Col>

            <Col className="coin-desc-link">
                <Row className="coin-desc">
                    <Col>
                        <Title level={3} className="coin-details-heading">
                            What is {cryptoDetails.name}?
                            {HTMLReactParser(cryptoDetails.description)}
                        </Title>
                    </Col>
                    
                </Row>

                <Col className="coin-links" span={12}>
                    <Title level={3} className="coin-details-heading">
                        {cryptoDetails.name} Links
                    </Title>
                    {cryptoDetails.links.map((link) => (
                        <Row className="coin-link" key={link.name}>
                            <Title level={5} className="link-name">
                                {link.type}
                            </Title>
                            <a href={link.url} target="_blank" rel="noreferrer">
                                {link.name}
                            </a>
                        </Row>
                    ))}
                </Col>
            </Col>
        </Col>
    )
  }

export default CryptoDetails
