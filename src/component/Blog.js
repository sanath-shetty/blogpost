import React from "react";
import Blogpostitem from "./Blogpostitem";

const Blog = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center">
        <h1>Listing all blog posts</h1>
        <p>Here is a list of amazing posts reated to react.</p>
      </div>
      <div className="row">
        <div className="col-md-6 m-auto">
          <Blogpostitem />
          <Blogpostitem />
          <Blogpostitem />
          <Blogpostitem />
          <Blogpostitem />
        </div>
      </div>
    </div>
  );
};

export default Blog;
