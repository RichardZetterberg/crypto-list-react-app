import React, { useState, useEffect, Fragment } from 'react';
import SmoothList from 'react-smooth-list';
import { BoxLoading } from 'react-loadingg';
import { Row, Col, Card, Select, Typography, Image, Avatar } from 'antd';
import { useGetNewsQuery } from '../../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import '../CryptoInfo/CryptoInfo.css';

const { Text, Title } = Typography;
const { Option } = Select;

const CryptoNews = ( {simplified} ) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data, isFetching } = useGetCryptosQuery(100);
  const [isFetchingNews, setIsFetchingNews] = useState(true);

  const { data: cryptoNews } = useGetNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 10 : 100,
    onSuccess: () => {
      setIsFetchingNews(false);
    }
  });

  useEffect(() => {
    if (cryptoNews) {
      setIsFetchingNews(false);
    }
  }, [cryptoNews]);

  if ( isFetchingNews ) {
   return (
    <Col span={24} style={{marginTop: '37vh'}}>
      <BoxLoading />
    </Col>
   ) 
  }
  return (
    <>
      <Row gutter={[ 24, 24 ]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              style={{ width: 180 }}
              placeholder="Select a crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map(
                (coin) => <Option value={coin.name} key={coin.name}>{coin.name}</Option>
              )}
            </Select>
          </Col>
        )}

        {cryptoNews?.data.map((news, index) => (
          <Col xs={24} sm={12} lg={8} key={index} className="crypto-card">
            <SmoothList transitionDuration={800}>
              <Card
                hoverable
                style={{ minHeight: '350px' }}
              >
                <a href={news.url} target='_blank' rel="norefferer">
                  <Row justify='space-around'>
                      {news?.image? (
                        <Fragment>
                          <Col span={17}>
                            <Title level={4}>{news.title}</Title>
                          </Col>
                          <Col span={6}>
                            <Image preview={false} src={news.image} />
                          </Col>
                        </Fragment>
                        
                      ) : (
                        <Col span={24}><Title level={4}>{news.title}</Title></Col>
                      )}
                  </Row>
                  <p style={{marginTop:"20px"}}>
                    {news.excerpt > 100
                      ? `${news.excerpt.substring(0, 100)}...`
                      : news.excerpt
                    }
                  </p>
                  <Row justify='space-around' align='middle'>
                    <Col span={24}>
                      <Row justify='end'>
                        <Text>
                          {news.relativeTime}
                        </Text>
                      </Row>
                    </Col>
                  </Row>
                </a>
              </Card>
            </SmoothList>
          </Col>
        ))}
        
      </Row>
    </>
  )
}

export default CryptoNews
