import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';
import { useBlogData } from '../hooks/useBlogData';

function BlogPost() {
  const { 
    data: blogData,
    removePost
  } = useBlogData();

  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

  const blogPost = blogData.find(post => post.slug === slug);

  const canDelete = auth.user?.role === "administrator" || blogPost.author === auth.user?.username;

  const returnToBlog = () => navigate('/blog');
  const deletePost = (postId) => {
    removePost(postId);
    navigate("/blog");
  };

  if (blogPost) {
    return (
      <>
        <button onClick={returnToBlog}>Return to blog</button>
        <h2>{blogPost.title}</h2>
        <p>{blogPost.author}</p>
        <p>{blogPost.content}</p>
        {canDelete && (
          <button onClick={() => deletePost(blogPost.id)}>Delete blogpost</button>
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