import React from 'react'
import TypeWriter from 'react-typewriter';
import millify from 'millify'
import { Typography, Row, Col, Statistic} from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../../services/cryptoApi'

import CryptoInfo from '../CryptoInfo/CryptoInfo'

const {Title} = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return 'Loading ...';

  return (
    <>
      <TypeWriter typing={1} maxDelay={10} fixed={true}>
        <Title level={2}>Global Crypto Stats</Title>
      </TypeWriter>
      <Row justify='center'>
        <Col span={12}>
          <Row justify='center'>
            <Statistic 
              title="Total Cryptocurrencies" 
              value={globalStats?.total} 
              valueStyle={{display:'flex', justifyContent:'center'}} 
            />
          </Row>
        </Col>
        <Col span={12}>
          <Row justify='center'>
            <Statistic 
              title="Total Exchanges" 
              value={millify(globalStats?.totalExchanges)}
              valueStyle={{display:'flex', justifyContent:'center'}}
            />
          </Row>
        </Col>
        <Col span={12}>
          <Row justify='center'>
            <Statistic 
              title="Total Market Cap" 
              value={millify(globalStats?.totalMarketCap)}
              valueStyle={{display:'flex', justifyContent:'center'}}
            />
          </Row> 
        </Col>
        <Col span={12}>
          <Row justify='center'>
            <Statistic 
              title="Total 24h Volume"
              value={millify(globalStats?.total24hVolume)}
              valueStyle={{display:'flex', justifyContent:'center'}}
            />
          </Row>
        </Col>
        <Col span={12}>
          <Row justify='center'>
            <Statistic 
              title="Total Markets"
              value={millify(globalStats?.totalMarkets)}
              valueStyle={{display:'flex', justifyContent:'center'}}
            />
          </Row>
        </Col>
        <Col span={12}>
          <Row justify='center'>
            <Statistic 
              title="Total Coins" 
              value={millify(globalStats?.totalCoins)}
              valueStyle={{display:'flex', justifyContent:'center'}}
            />
          </Row>
        </Col>
      </Row>

      <Row 
        justify='space-around'
        style={{marginTop:'40px'}}
      >
        <Col span={12}>
          <TypeWriter typing={1} maxDelay={10} fixed={true}>
            <Title level={2}>Top 10 Cryptocurrencies</Title>
          </TypeWriter>
        </Col>
        <Col span={12}>
          <Row justify='end'>
            <Title level={3}><Link to="/cryptos">Show more</Link></Title>
          </Row>
        </Col>
      </Row>
      
      <Row style={{marginTop:'20px'}}>
        <CryptoInfo simplified={true} />
      </Row>
    </>
  )
}

export default Home
