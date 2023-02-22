import React from 'react'
import { Link } from 'react-router-dom'

const blogCard = ({ article }) => {
  return (
    <Card className="mb-3" style={{ width: '20%' }}>
      <Image src={article.thumbnail} alt={article.title} fluid />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Subtitle className="text-muted">
          {new Date(article.pubDate).toLocaleDateString()}
        </Card.Subtitle>
        <Link to={article.link} variant="primary">
          Read More
        </Link>
      </Card.Body>
    </Card>
  )
}

export default blogCard
