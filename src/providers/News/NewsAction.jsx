
const getCurrentDate = () =>{
    const requestDate = new Date(Date.now()).toLocaleDateString("en-In")

    const day = requestDate.split("/")[0]
    const month = requestDate.split("/")[1] - 1
    const year = requestDate.split("/")[2]

    return `${year}-${month}-${day}`
}

const CurrentDate = getCurrentDate()


export const fetchNews = async(topic) => {
    const res = await fetch(`https://gnews.io/api/v4/search?q=${topic}&lang=en&country=us&max=10&token=f94672d9a1e1c89ddf72f07aa14d2d43`)
  const data =await res.json()
  return data.articles
  }