import React, { useState, Fragment } from 'react';
import SmoothList from 'react-smooth-list';
import { BoxLoading } from 'react-loadingg';
import { Row, Col, Card, Select, Typography, Image, Avatar } from 'antd';
import { useGetNewsQuery } from '../../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import moment from 'moment';

const { Text, Title } = Typography;
const { Option } = Select;

const CryptoNews = ( {simplified} ) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data, isFetching } = useGetCryptosQuery(100);

  const { data: cryptoNews } = useGetNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 10 : 100,
  });

  if (isFetching) return <BoxLoading />;

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
                (coin) => <Option value={coin.name}>{coin.name}</Option>
              )}
            </Select>
          </Col>
        )}
        
        {cryptoNews?.value.map((news, index) => (
          <Col xs={24} sm={12} lg={8} key={index} className="crypto-card">
            <SmoothList transitionDuration={800}>
              <Card 
                hoverable
              >
                <a href={news.url} target='_blank' rel="norefferer">
                  <Row justify='space-around'>
                      {news?.image?.thumbnail ? (
                        <Fragment>
                          <Col span={17}>
                            <Title level={4}>{news.name}</Title>
                          </Col>
                          <Col span={6}>
                            <Image preview={false} src={news.image.thumbnail.contentUrl} />
                          </Col>
                        </Fragment>
                        
                      ) : (
                        <Col span={24}><Title level={4}>{news.name}</Title></Col>
                      )}
                    
                  </Row>
                  <p style={{marginTop:"20px"}}>
                    {news.description > 100
                      ? `${news.description.substring(0, 100)}...`
                      : news.description
                    }
                  </p>
                  <Row justify='space-around' align='middle'>
                    <Col span={4}>
                        <Avatar
                          src={news.provider[0]?.image?.thumbnail?.contentUrl}
                          alt='news'
                        />
                    </Col>
                    <Col span={12} style={{textAlign:'center'}}>
                        <Text>{news.provider[0]?.name}</Text>
                    </Col>
                    <Col span={8}>
                      <Row justify='end'>
                        <Text>
                          {moment(news.datePublished).startOf('ss').fromNow()}
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
