import './App.css';

import React from "react";
import axios from "axios";
import {Row, Col, Image} from 'antd'
import { useState, useEffect } from "react";

import CoinListItems from './features/CoinListItem/CoinListItem';

function App() {
  const [listCoins, setListCoins] = useState([]);

  useEffect(() => {
    refreshPage();
  }, []);

  const refreshPage = () => {
    axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    ).then((response) => {
      setListCoins(response.data.coins);
      console.log(response.data.coins[0].item.name);
    });
  };

  const coins = listCoins.map((coin, index) => 
    <Image
      key={index}
      preview={false}
      src={coin.item.small}
    />
    );

  return (
    <>
      {/* {coins} */}
      {/* <ul>{coins}</ul> */}
      <Row justify="center">
          <Col span={12} className='main-cont'>
            {listCoins.map((coin, index) => 
                  <CoinListItems
                    key={index}
                    img={coin.item.small}
                    name={coin.item.name}
                    symbol={coin.item.symbol}
                    marketCap={coin.item.market_cap_rank}
                  />
            )}
          </Col>
        </Row>
      
      
    </>
  );
}

export default App;
