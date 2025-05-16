import React, { useContext } from 'react'
import ThemeContext from '../providers/theme/ThemeContext'

const NewsCard = ({news}) => {

  const {dark} = useContext(ThemeContext)


  return (
    <>

<div className="col-md-8 col-md-12 ">
          <div className={dark ? "card rounded-0 bg-dark text-light" : "card rounded-0"}>
         
  <div className="row g-0">
    <div className="col-md-4">
      <img src={news?.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{news.title}</h5>
        <p className="card-text">{news.description}</p>
        <p className="card-text"><small className="text-body-secondary">{new Date(news.publishedAt).toDateString('en-IN')}</small></p>
        <p className="card-text"><small className="text-body-secondary"></small>{news.author}</p>
        <a target='_blank' href={news.url} className="btn btn-sm btn-outline-primary float-end my-3" >View Full News</a>
      </div>
    </div>
  </div>
</div>
          </div>
        

      
    </>
  )
}

export default NewsCard;


// <img id='newsImage'  src={news?.urlToImage} className="card-img card rounded-0" alt="" />
//             <div className={dark ? "card rounded-0 bg-dark text-light" : "card rounded-0"}>
//               <h1 className={dark ? "card rounded-0 bg-dark text-light" : "card rounded-0"}>{news?.title}</h1>
//               <h4 className={dark ? "card rounded-0 bg-dark text-light" : "card rounded-0"}>{news?.description}</h4>
//               <p className={dark ? "card rounded-0 bg-dark text-light" : "card rounded-0"}>{new Date(news.PublishedAt).toDateString("en-IN")}</p>
//               <p className={dark ? "card rounded-0 bg-dark text-light" : "card rounded-0"}>{news?.author}</p>
//               <a
//               target='_blank'
//               href='{news.url}'
//                className={dark ? "card rounded-0 bg-secondary text-light" : "card rounded-0"}>View More</a>
//             </div>