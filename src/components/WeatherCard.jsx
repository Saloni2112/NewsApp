import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../providers/theme/ThemeContext'
import weatherContext from '../providers/weather/WeatherContext'
import { toast } from 'react-toastify'

const Weathercard = () => {

  const {dark} = useContext(ThemeContext)
  const {dispatch , weather} = useContext(weatherContext)

  // console.log(weather)

  const getWeather = async (City) =>{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ede60ddb14184e1aae184126240410&q=${City}&aqi=yes`)
    const data = await response.json()
//  console.log(data)
    try {
      if (data.error) {
        // window.alert("Enter valid city Name !");
        toast.error("Enter valid city Name !")
      } else{
        dispatch({
          type : "GET_WEATHER",
          payload : data
        })
      }
    } catch (error) {
    toast.error("Somthing Went Wrong")
    }
  }

  const [City, setCity] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    getWeather(City)
    setCity("")
  }

  useEffect(() =>{
getWeather("Indore")
  }, [])

  if(!weather){
    return (
      <h1 className="text-secondary">Loading...</h1>
    )
  }


  return (
    <div className={dark ? "card p-3 bg-dark text-light" : "card p-3"}>
<h1>Today,s Weather</h1>
      <div className="d-flex align-items-center justify-content-between">

        <form className='w-50' onSubmit={(e) => handleSubmit(e)}>
         {/* <div className='p-3'> */}
         <input type="text" placeholder='Enter City Name' className="form-control" onChange={(e) => setCity(e.target.value)} value={City} />
         <button className="btn btn-success w-100 my-3">Search</button>
         {/* </div> */}
        </form>


        <div>
          <h1>{weather?.current?.temp_c}</h1>
          <h2>{weather?.location?.name}</h2>
        </div>
        <div className='text-center'>
          <img style={{ height: "100px", width: "100px" }} src={weather?.current?.condition?.icon || "./cloudy.png"} alt="" />
          <p className="text-secondary">{weather?.current?.condition?.text}</p>
        </div>

      </div>

    </div>
  )
}

export default Weathercard;
