import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogData } from "../blogdata";

function BlogPage() {
  return (
    <>
      <h1>BlogPost</h1>
      <Outlet />
      {blogData.map(post => (
        <BlogLink post={post} key={post.slug} />
      ))}
    </>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  )
}



export { BlogPage };
