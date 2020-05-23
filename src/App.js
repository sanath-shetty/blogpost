import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Blog from "./component/Blog";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Blog />
    </div>
  );
};

export default App;
