import React, { useContext, useEffect, useState } from 'react'
import CryptoContext from '../providers/crypto/CryptoContext'

const Crypto = () => {

    const {Crypto , dispatch} = useContext(CryptoContext)



const getCrypto = async () =>{
    const res = await fetch("https://api.coingecko.com/api/v3/search/trending")
    const data = await res.json()
    console.log(data.coins)
   try {
    dispatch({
        type : "GET_CRYPTO",
        payload : data.coins
    })
   } catch (error) {
    console.log(error)
   }
}

useEffect(() =>{
    getCrypto()

}, [])



return (
    <>
      <marquee behavior="" direction="">
        {Crypto && Crypto.map((coin, index) => ( <>
          <img src={coin.item.small} style={{"width" : "20px"}} alt="" />
          <span key={index}>  {coin.item.name} ({coin.item.symbol})  </span>
          </>
        ))}
      </marquee>
    </>
  );
  
}

export default Crypto
