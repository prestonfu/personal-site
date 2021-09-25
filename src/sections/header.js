import React from 'react';

const Header = () => {
  return (
    <div>
      <div className = "absolute top-0 left-0 z-10 mt-6 ml-5">
        <div>
          <a href="/">
            <p className = "nav-name">
              <b>Preston Fu</b>
            </p>
          </a>
        </div>
      </div>
      <div className = "absolute top-0 right-0 z-10 mt-5 mr-5">
        <div className = "flex items-center">
          <a href="/projects/math">
            <p className = "nav-link mr-8">
              Math
            </p>
          </a>
          <a href="/projects/cs">
            <p className = "nav-link mr-8">
              Computer Science
            </p>
          </a>
          <a href="/projects/writing">
            <p className = "nav-link mr-8">
              Writing
            </p>
          </a>
          <a href="/bio">
            <p className = "nav-link mr-8">
              Bio
            </p>
          </a>
          <a href="/files/Resume.pdf"  target="_blank">
            <button className="outline-button-sm">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
