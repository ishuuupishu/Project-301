// src/pages/Home.js
import React from 'react';
import '../styles/Home.css';


const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>‘With Ardor and Devotion’</h1>
        <p>Aligning who you are with what you do is the heart of our experience.</p>
        <button className="btn btn-primary">Learn About Visiting</button>
      </div>
      <div className="info-section">
        <div className="info-box" style={{ backgroundColor: '#00467f' }}>
          <h3>Future Students</h3>
          <p>Information for prospective students...</p>
        </div>
        <div className="info-box" style={{ backgroundColor: '#f7b32b' }}>
          <h3>Academic Programs</h3>
          <p>Explore our programs and find your fit...</p>
        </div>
        <div className="info-box" style={{ backgroundColor: '#00bfff' }}>
          <h3>Presidential Search</h3>
          <p>Information on presidential selection...</p>
        </div>
        <div className="info-box" style={{ backgroundColor: '#8e1f1f' }}>
          <h3>Virtual Campus Tours</h3>
          <p>Take a tour of our campus virtually...</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
