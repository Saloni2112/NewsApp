import React, { useContext, useState } from 'react'
import ThemeContext from '../providers/theme/ThemeContext'
import NewsContext from '../providers/News/NewsContext'
import { fetchNews } from '../providers/News/NewsAction'
import { toast } from 'react-toastify'

const Navbar = () => {
  const {dark} = useContext(ThemeContext)

  const {dispatch} = useContext(NewsContext)

  const [City , setCity] = useState("")

  const getNews = async (City) =>{
    const data = await fetchNews(City)
try {
  if (data.error) {
    toast.error("Invalid City Name")
  }
  else{
    dispatch({
      type : "GET_NEWS",
      payload : data
    })
  }
} catch (error) {
  toast.error("Invalid City Name")
}
   
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    getNews(City)
    setCity("")
  }

  return (

    <nav className={dark ? "navbar navbar-expand-lg bg-dark shadow-lg " : "navbar navbar-expand-lg bg-light shadow-lg"}>
  <div className="container-fluid">
    <a className={dark ? "navbar-brand text-light" : "navbar-brand text-dark"} href="#" onClick={() => getNews("India")}>NDTV News</a>


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">


        <li className="nav-item">
          <a className={dark ? "nav-link active text-light"  : "nav-link active text-dark "}  aria-current="page" href="#" onClick={() => getNews("India - Sports")}>Sports</a>
        </li> 

        <li className="nav-item">
          <a className={dark ? "nav-link active text-light"  : "nav-link active text-dark "} aria-current="page" href="#" onClick={() => getNews("India - Politics")} >Politics</a>
        </li> 

        <li className="nav-item">
          <a className={dark ? "nav-link active text-light"  : "nav-link active text-dark "} aria-current="page" href="#" onClick={() => getNews("Business")} >Business</a>
        </li> 

        <li className="nav-item">
          <a className={dark ? "nav-link active text-light"  : "nav-link active text-dark "} aria-current="page" href="#" onClick={() => getNews("Bollywood")}>Intertainment</a>
        </li> 

        <li className="nav-item">
          <a className={dark ? "nav-link active text-light"  : "nav-link active text-dark "} aria-current="page" href="#"onClick={() => getNews("International News")}>International</a>
        </li> 

       
       
      </ul>
      <form className="d-flex" role="search" onSubmit={(e) => handleSubmit(e)}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setCity(e.target.value)} value={City}/>
        <button  className={dark ? "btn btn-secondary" : "btn btn-outline-success"  } type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
