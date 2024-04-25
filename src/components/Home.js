import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const headingStyle = {
    color: "firebrick", // Sets the color to 'firebrick'
  };

  return (
    <div id="home">
      <h1 style={headingStyle}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
