import React, { useState, useEffect } from 'react'
import ToText from '../../utils/ToText'
import '../blog/blog.css'

const Blog = () => {
  //fetch data properly
  const [profile, setProfile] = useState({
    name: 'Krystle Mitchell',
    profileImage: ' ',
    profileURL: ' ',
  }) // stores API request
  const [blog, setBlog] = useState({
    item: [],
    isLoading: true,
    error: null,
  }) // stores Loading state

  useEffect((info) => {
    setBlog({ ...blog, isLoading: true })
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/green-code`,
    )
      .then((res) => res.json())
      .then((info) => {
        const image = info.feed.image
        const link = info.feed.link
        const blogs = info.items
        const posts = blogs.filter((post) => post.categories.length > 0)

        setProfile((p) => ({ ...p, profileURL: link, profileImage: image }))
        setBlog({ item: posts, isLoading: false })
      })
      .catch((err) => setBlog({ error: err.message }))
  }, [])
  //function that holds blogs to render it to the page
  function truncateText(text, start, len) {
    return text.length > len ? `${text.slice(start, len)}...` : text
  }

  const haveBlogs = () => {
    if (blog.item) {
      return blog.item.map((post, index) => (
        <div className="grid b-card ab border shadow" key={index}>
          <div
            className="b-card-image tb"
            style={{ backgroundImage: `url(${post.thumbnail})` }}
          >
            <div className="authorImg">
              <a
                href={profile.profileURL}
                rel="noopener noreferrer"
                target="_blank"
                style={{ backgroundImage: `url(${profile.profileImage})` }}
              >
                Profile
              </a>
            </div>
          </div>
          <div className="b-card-body">
            <h5 className="b-card-title">
              <a
                href={post.link}
                className="postTitle"
                rel="noreferrer"
                target="_blank"
              >
                {truncateText(post.title, 0, 80)}
              </a>
            </h5>
            <p className="b-cardText">
              {truncateText(ToText(post.description), 0, 265)}
            </p>
          </div>
        </div>
      ))
    }
  }

  return (
    <div className="blogs">
      <h2>Blog Posts</h2>
      <div className="container auto30">
        {blog.isLoading ? 'Loading...' : haveBlogs()}
      </div>
    </div>
  )
}

export default Blog
