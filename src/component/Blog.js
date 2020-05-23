import React from "react";
import Blogpostitem from "./Blogpostitem";
import Heading from "./Heading";

const Blog = () => {
  return (
    <div className="container mt-5">
      <Heading
        title="React Blog."
        tagline="We have the best collections of react blogs."
      />
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
