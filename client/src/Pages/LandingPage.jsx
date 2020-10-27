import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="cover">
      <h1>Welcome to </h1>
      <h1 id="gitBrewd">Git Brew'd</h1>
      <p>Hop finder for Web Developers</p>
      <h6>You Must be 21 Year or Older to Enter this Site</h6>
      <div className="button12">
        <Link to="/Home">
          <button className="btn" id="btn1">
            I'm 21 or Older
          </button>
        </Link>
        <div class="divider" />
        <button
          id="btn2"
          className="btn"
          onClick={() => {
            alert('Sorry! You must be 21 to enter!');
          }}
        >
          I'm under 21
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
