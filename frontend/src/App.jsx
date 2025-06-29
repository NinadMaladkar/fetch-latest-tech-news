import { useState } from 'react'
import './App.css'

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    setArticles([]);
    try {
      const apiKey = '0792d9c4e54f4473b28d8699e0bdaae7'; // In production, do NOT expose API keys in frontend!
      const url = `https://newsapi.org/v2/everything?sources=techcrunch&pageSize=10&language=en&sortBy=publishedAt&apiKey=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.status === 'ok') {
        setArticles(data.articles);        
      } else {
        setError('Failed to fetch news.');
      }
    } catch {
      setError('Error fetching news.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Latest Tech News</h1>
      <button onClick={fetchNews} disabled={loading} style={{marginBottom: '1rem'}}>
        {loading ? 'Loading...' : 'Fetch Latest TechCrunch News'}
      </button>
      {error && <div style={{color: 'red'}}>{error}</div>}
      <div className="news-tiles">
        {articles.map((article, idx) => (
          
          <div  key={idx}>
            
            <h2>{article.title}</h2>
            <p><strong>Description:</strong> {article.description || 'N/A'}</p>
            <p><strong>Published At:</strong> {article.publishedAt}</p>
            <p><strong>Content:</strong> {article.content || 'N/A'}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">{ article.url } </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
