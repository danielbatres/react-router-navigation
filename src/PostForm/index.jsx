import React from "react";

function PostForm() {
  return (
    <>
      <h1>Post form</h1>
      <p>Post form </p>
      <form>
        <label for="title">Title</label>
        <input id="title" placeholder="Enter the post title" />
        <label for="content">Content</label>
        <textarea id="content" placeholder="Enter the post content"></textarea>
      </form>
    </>
  );
}

export { PostForm };
