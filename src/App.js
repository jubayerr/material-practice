import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';
function App() {
  const [articles, setArticles] = useState([])
  // console.log(articles);
  // useEffect(() => {
  //   const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=92e9e1cd0a6144b89e740cbed580b2e0'
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => setArticles(data.articles))
  // }, [])
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=92e9e1cd0a6144b89e740cbed580b2e0'
    axios(url)
      .then(data => setArticles(data.data.articles))
  }, [])
  return (
    <div div className="App" >
      <h1>Material core concepts</h1>
      <div className="grid-container">
        {
          articles.map(article => <News article={article}></News>)
        }
      </div>
    </div >
  );
}

export default App;
