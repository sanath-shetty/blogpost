import React from "react";

const Blogpostitem = (props) => {
  return (
    <div>
      <div className="card mb-4">
        <div className="card-header">{props.singlePost.title}</div>
        <div className="card-body">{props.singlePost.body}</div>
        <div className="card-footer">
          <a href="#!" className="btn btn-primary">
            Read More.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogpostitem;
