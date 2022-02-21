import React from 'react';
import { Row, Col, Card, Select, Typography, Image, Avatar } from 'antd';
import { useGetNewsQuery } from '../../services/cryptoNewsApi';
import moment from 'moment';

const { Text, Title } = Typography;
const { Option } = Select;

const CryptoNews = ( {simplified} ) => {

  const { data: cryptoNews } = useGetNewsQuery({
    newsCategory: 'Cryptocurrency',
    count: simplified ? 10 : 100,
  });

  console.log(cryptoNews);

  return (
    <>
      <Row gutter={[ 24, 24 ]}>
        {cryptoNews?.value.map((news, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card 
              hoverable
              style={{minHeight:'200px'}}
            >
              <a href={news.url} target='_blank' rel="norefferer">
                <Row justify='space-around'>
                  <Col span={17}><Title level={4}>{news.name}</Title></Col>
                  <Col span={6}>
                    <Image preview={false} src={news?.image?.thumbnail?.contentUrl} />
                  </Col>
                </Row>
                <p>
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
          </Col>
        ))}
      </Row>
    </>
  )
}

export default CryptoNews
