import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import "./App.css"

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import CryptoInfo from './components/CryptoInfo/CryptoInfo'
import CryptoNews from './components/CryptoNews/CryptoNews'

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/cryptos' element={<CryptoInfo />} />
                <Route path='/news' element={<CryptoNews />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className='footer'></div>
    </div>
  )
}

export default App
