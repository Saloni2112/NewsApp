import React, { useContext } from 'react'
import NewsContext from '../providers/News/NewsContext'

const Slider = () => {

const {newsData}= useContext(NewsContext)

  return (
    <>
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    {
        newsData.map((news,index)=>{
            return(
                <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
      <img id='slid-img' src={news.urlToImage || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fwhatsapp-dp--583708801711867038%2F&psig=AOvVaw3jILVcJ_NUl6Y6q-VotG3b&ust=1728377132950000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKis-YLx-4gDFQAAAAAdAAAAABAE"} className="d-block w-100" alt="..."/>
    </div>
            )
        })
    }
  

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>)
}

export default Slider
