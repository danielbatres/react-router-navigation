import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { blogData } from '../blogdata';
import { useAuth } from '../auth';

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

  const blogPost = blogData.find(post => post.slug === slug);

  const canDelete = auth.user?.isAdmin || blogPost.author === auth.user?.username;

  const returnToBlog = () => navigate('/blog');

  if (blogPost) {
    return (
      <>
        <button onClick={returnToBlog}>Return to blog</button>
        <h2>{blogPost.title}</h2>
        <p>{blogPost.author}</p>
        <p>{blogPost.content}</p>
        {canDelete && (
          <button>Delete blogpost</button>
        )}
      </>
    );
  } else {
    return (
      <p>Post is not valid</p>
    );
  }
}

export { BlogPost }