import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import './CryptoInfo.css';

import { useGetCryptosQuery } from '../../services/cryptoApi';

const { Search } = Input;

const CryptoInfo = ({ simplified }) => {

  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const filterData = cryptosList?.data?.coins.filter(
      (coin) => coin.name.toLowerCase().includes(searchText.toLowerCase())
      );

    setCryptos(filterData);
  }, [cryptosList, searchText]);

  return (
    <>
      <Row justify='center'>
        <Col span={12}>
          <Search 
            placeholder="Find coin"
            onChange={(e) => setSearchText(e.target.value)} 
            enterButton
            style={{height:'60px'}}
          />
        </Col>
      </Row>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((coin, index)=> (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.id}>
            <Card
              key={index}
              title={`${coin.rank}. ${coin.name}`}
              extra={<img className='crypto-image' src={coin.iconUrl} />}
              hoverable
            >
              <p>Price: {millify(coin.price)}</p>
              <p>Market Cap: {millify(coin.marketCap)}</p>
              <p>Daily Change: {millify(coin.change)}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default CryptoInfo
