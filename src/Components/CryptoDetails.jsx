/* eslint-disable no-undef */
import React,{ useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";

import { Col, Row, Typography, Select } from "antd";
import {
    CheckOutlined,
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
    TrophyOutlined,
    ThunderboltOutlined,
    NumberOutlined,
} from "@ant-design/icons";
import { useGetCryptoDetailsQuery } from "../Services/cryptoApi";

const { Title, Text } = Typography;
const { Option } = Select;

export default function CryptoDetails() {
  const { coinId } = useParams();
  // const [timePeriod, setTimeperiod] = useState('7d');
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
   
  console.log(data);
  // const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${data?.data?.coin.price && millify(data?.data?.coin.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: data?.data?.coin.rank, icon: <NumberOutlined /> },
    { title: 'Market Cap', value: `$ ${data?.data?.coin.marketCap && millify(data?.data?.coin.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${data?.data?.coin.allTimeHigh?.price && millify(data?.data?.coin.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];
    
  const genericStats = [
    { title: 'Number Of Markets', value: data?.data?.coin.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: data?.data?.coin.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: data?.data?.coin.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${data?.data?.coin.supply?.total && millify(data?.data?.coin.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${data?.data?.coin.supply?.circulating && millify(data?.data?.coin.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];
  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
          {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
        </Title>
        <p>{data?.data?.coin.name} </p>
        <Col className="stats-container">
        <Col className="coin-value-statistics">
            <Col className="coin-value-statistics-heading">            <Title level={3} className="coin-details-heading">{data?.data?.coin.name} Value Statistics</Title>
              <p>An overview showing the statistics of {data?.data?.coin.name}, such as the base and quote currency, the rank, and trading volume.</p>
              
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
        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">Other Stats Info</Title>
                <p>An overview showing the statistics of {data?.data?.coin.name}, such as the base and quote currency, the rank, and trading volume.</p>
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
        
              <Col className="coin-links">
                <Title level={3} className="coin-details-heading">{data?.data?.coin.name} Links</Title>
                {data?.data?.coin.links?.map((link) => (
            <Row className="coin-link" key={link.name}>
              <Title level={5} className="link-name">{link.type}</Title>
              <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
            </Row>
          ))}
                </Col>
            </Col>
           </Col>
          </Col>
          </Col>
                 
      </Col>
   
  )
}
            // eslint-disable-next-line no-undef
    //         <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimeperiod(value)}>
    //  {time.map((date) => <Option key={date}>{date}</Option>)}
    //    </Select>
       {/* <LineChart coinHistory={coinHistory} currentPrice={millify(data?.data?.coin.price)} coinName={data?.data?.coin.name} /> */}
       
       {/* {stats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">Other Stats Info</Title>
            <p>An overview showing the statistics of {data?.data?.coin.name}, such as the base and quote currency, the rank, and trading volume.</p>
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
          <Title level={3} className="coin-details-heading">What is {data?.data?.coin.name}?</Title>
          {HTMLReactParser(data?.data?.coin.description)}
        </Row>
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">{data?.data?.coin.name} Links</Title>
          {data?.data?.coin.links?.map((link) => (
            <Row className="coin-link" key={link.name}>
              <Title level={5} className="link-name">{link.type}</Title>
              <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
            </Row>
          ))}
        </Col> 
      </Col>
    </Col> */}
        
  
