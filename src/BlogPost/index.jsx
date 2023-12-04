import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { blogData } from '../blogdata';

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const blogPost = blogData.find(post => post.slug === slug);

  const returnToBlog = () => navigate('/blog');

  if (blogPost) {
    return (
      <>
        <button onClick={returnToBlog}>Return to blog</button>
        <h2>{blogPost.title}</h2>
        <p>{blogPost.author}</p>
        <p>{blogPost.content}</p>
      </>
    );
  } else {
    return (
      <p>Post is not valid</p>
    );
  }
}

export { BlogPost }