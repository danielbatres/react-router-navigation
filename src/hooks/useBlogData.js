import { createContext, useContext, useState } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [data, setData] = useState(blogData);

  const addPost = (newPost) => {
    setData([...blogData, newPost]);
  };

  const removePost = (postId) => {
    const blogDataUpdate = blogData.filter((post) => post.id !== postId);

    console.log(blogDataUpdate);

    setData(blogDataUpdate);
  };

  const editPost = (postEdit) => {
    const index = blogData.indexOf((post) => post.id === postEdit.id);
    blogData = blogData.splice(index, 1);

    setData([...blogData, postEdit]);
  };

  const blog = {
    data,
    addPost,
    removePost,
    editPost
  };

  return (
    <BlogContext.Provider value={blog}>
      {children}
    </BlogContext.Provider>
  )
}

const useBlogData = () => {
  const blog = useContext(BlogContext);

  return blog;
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

export { BlogProvider, useBlogData };
