import React from 'react'
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
      <Title level={2}>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats?.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats?.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats?.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)} /></Col>
        <Col span={12}><Statistic title="Total Coins" value={millify(globalStats?.totalCoins)} /></Col>
      </Row>
      <Row justify='space-around'>
        <Col span={12}>
          <Title level={2}>Top 10 Cryptocurrencies</Title>
        </Col>
        <Col span={12}>
          <Row justify='end'>
            <Title level={3}><Link to="/">Show more</Link></Title>
          </Row>
        </Col>
      </Row>
      <CryptoInfo simplified={true} />
    </>
  )
}

export default Home
