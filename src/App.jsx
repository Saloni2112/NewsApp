import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Themebutton from './components/Themebutton'
import { WeatherProvider } from './providers/weather/WeatherContext'
import { NewsProvider } from './providers/News/NewsContext'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CryptoProvider } from './providers/crypto/CryptoContext'
import Crypto from './components/Crypto'

const App = () => {
  return (
   <div>
      <CryptoProvider>   
        <NewsProvider>
   <WeatherProvider>
    <Crypto />
    <Navbar/>
    <Home/>
    <Themebutton/>
    <ToastContainer/>
    </WeatherProvider>
   </NewsProvider>
   </CryptoProvider>

   </div>
  )
}

export default App
