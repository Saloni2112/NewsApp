
const getCurrentDate = () =>{
    const requestDate = new Date(Date.now()).toLocaleDateString("en-In")

    const day = requestDate.split("/")[0]
    const month = requestDate.split("/")[1] - 1
    const year = requestDate.split("/")[2]

    return `${year}-${month}-${day}`
}

const CurrentDate = getCurrentDate()


export const fetchNews = async(topic) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=${CurrentDate}&sortBy=publishedAt&apiKey=8df3926ac9e74fcb8ef1226289c20d75`)
  const data =await res.json()
  return data.articles
  }