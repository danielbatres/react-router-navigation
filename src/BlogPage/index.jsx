import React from "react";
import { Link } from "react-router-dom";

function BlogPage() {
  return (
    <>
      <h1>BlogPost</h1>
      {blogData.map(post => (
        <BlogLink post={post} />
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

const blogData = [
  {
    title: "What is React?",
    slug: "what-is-react",
    content: "React is the best JavaScript Framework",
    author: "user12",
  },
  {
    title: "What is Vue?",
    slug: "what-is-vue",
    content: "Vue is the best JavaScript Framework",
    author: "user10",
  },
  {
    title: "What is Angular?",
    slug: "what-is-angular",
    content: "Angular is the best JavaScript Framework",
    author: "user8",
  }
];

export { BlogPage };
