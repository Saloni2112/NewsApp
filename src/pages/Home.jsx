import React, { useContext, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import ThemeContext from '../providers/theme/ThemeContext'
import Weathercard from '../components/WeatherCard';
import NewsContext from '../providers/News/NewsContext';
import { fetchNews } from '../providers/News/NewsAction';
import Slider from '../components/Slider';
import { toast } from 'react-toastify';

const Home = () => {
  const {dark} = useContext(ThemeContext);
const {newsData, dispatch} = useContext(NewsContext);

const getNews = async (City) =>{
  const data = await fetchNews(City)
  dispatch({
    type : "GET_NEWS",
    payload : data
  })
}

useEffect(() => {
getNews("Indore")
},[])

if (!newsData || newsData.length === 0) {
  toast.error(" kindly search valid News")
  // <h1 className='text-center'>TOP NEWS</h1>
}
else if(newsData?.length === 0 || !newsData){
  // <h1 className='text-center display1'>Loading...</h1>
  getNews("India")
}


  return (
    <div className={dark ? 'container-fluid p-5 bg-secondary' : 'container-fluid p-5 bg-light'}>
      <h1 className='text-center'>TOP NEWS</h1>

<Slider/>
    

      <div className="row g-3 mt-3">
        <div className="col-md-4 col-md-12">
      <Weathercard/>
        </div>
      {
        !newsData || newsData?.length === 0 ? (
        <h1 className="text-center display-5 text-secondary">Loding...</h1>
        ) : 
        (
          newsData.map((news , index) => <NewsCard key={index} news={news}/> )
          // newsData.map((index , news) => <NewsCard key={index} news={news} />)
           ) 
}

    </div>
    </div>
  )
}

export default Home;
