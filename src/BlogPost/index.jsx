import React from 'react'
import { useParams } from 'react-router-dom';
import { blogData } from '../blogdata';

function BlogPost() {
  const { slug } = useParams();

  const blogPost = blogData.find(post => post.slug === slug);

  if (blogPost) {
    return (
      <>
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