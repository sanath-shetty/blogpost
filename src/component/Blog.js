import React, { useState, useEffect } from "react";
import Blogpostitem from "./Blogpostitem";
import Heading from "./Heading";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogPosts();
  }, []);

  const getBlogPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const blogPosts = res.data;
      console.log(blogPosts);
      setPosts(blogPosts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <Heading
        title="React Blog."
        tagline="We have the best collections of react blogs."
      />
      <div className="row">
        <div className="col-md-6 m-auto">
          {posts.map((post) => (
            <Blogpostitem singlePost={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
