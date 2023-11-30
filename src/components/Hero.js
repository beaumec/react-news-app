import React, { useState } from "react";

const Hero = ({ setSearch }) => {
  const [name, setName] = useState("");

  const searchNews = () => {
    setSearch(name);
  };
  return (
    <div>
      <header>
        <div className="hero">
          <div className="hero-banner">
            <h4>News Store</h4>
            <p> All the news around the world</p>
            <input
              type="text"
              placeholder="Search for news"
              className="input-bar"
              onChange={(e) => setName(e.target.value)}
            />
            <button className="hero-btn" onClick={() => searchNews()}>
              Search
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
