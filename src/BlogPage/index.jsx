import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../auth";
import { useBlogData } from "../hooks/useBlogData";

function BlogPage() {
  const { data: blogData } = useBlogData();
  const auth = useAuth();

  const isCreator = auth.user?.role === "creator";

  return (
    <>
      <h1>BlogPost</h1>
      {isCreator && (
        <button>
          <Link to="/blog/new-post">Create new blog post</Link>
        </button>
      )}
      <Outlet />
      {blogData.map((post) => (
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
