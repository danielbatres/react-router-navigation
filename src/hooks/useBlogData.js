import { useState } from "react";

const useBlogData = () =>{
  const [data, setData] = useState(blogData);

  const addPost = (newPost) => {
    setData([...blogData, newPost]);
  };

  const removePost = (idPost) => {
    const blogDataUpdate = blogData.filter(post => post.id !== idPost);
    
    setData(blogDataUpdate);
  };

  const editPost = (postEdit) => {
    const index = blogData.indexOf(post => post.id === postEdit.id);
    blogData = blogData.splice(index, 1);

    setData([...blogData, postEdit]);
  };

  return {
    data,
    addPost,
    removePost,
    editPost
  };
} 

let blogData = [
  {
    id: 1,
    title: "What is React?",
    slug: "what-is-react",
    content: "React is the best JavaScript Framework",
    author: "user12"
  },
  {
    id: 2,
    title: "What is Vue?",
    slug: "what-is-vue",
    content: "Vue is the best JavaScript Framework",
    author: "user10"
  },
  {
    id: 3,
    title: "What is Angular?",
    slug: "what-is-angular",
    content: "Angular is the best JavaScript Framework",
    author: "user8"
  }
];

export { useBlogData };
