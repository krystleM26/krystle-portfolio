import React, {useState} from 'react'
import blogCard from './blogCard'

const mediumArticle = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@your-medium-username";

const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@your-medium-username")
      .then(res => res.json())
      .then(data => setArticles(data.items));
  }, []);

  return (
    <Row>
      {articles.map((article, index) => (
           <Col key={index} lg="4" md="4" className="mb-3">
               <MediumCard article={article} />
           </Col>
      ))}
    </Row>
  );
};

export default Blog
