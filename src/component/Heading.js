import React from "react";

const Heading = (props) => {
  return (
    <div className="jumbotron text-center">
      <h1>{props.title}</h1>
      <p>{props.tagline}</p>
    </div>
  );
};

export default Heading;
