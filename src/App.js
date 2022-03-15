import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import "./App.css"

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import CryptoInfo from './components/CryptoInfo/CryptoInfo'
import CryptoNews from './components/CryptoNews/CryptoNews'
import CryptoDetails from './components/CryptoDetails/CryptoDetails'

const App = () => {
  return (
    <div className='app'>
      <Navbar />

      <div className='main'>
        <Layout>
            <div className='routes'>
              <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/cryptos' element={<CryptoInfo />} />
                  <Route path='/news' element={<CryptoNews />} />
                  <Route path="/crypto/:coinUUID" element={<CryptoDetails/>} />
              </Routes>
            </div>
        </Layout>
        
        <Footer />

      </div>
    </div>
  )
}

export default App;