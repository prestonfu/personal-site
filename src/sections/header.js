import React from 'react';

const Header = () => {
  return (
    <div>
      <div className = "absolute top-0 left-0 z-10 mt-6 ml-5">
        <div>
          <a href="/">
            <p className = "nav-name">
              <b>PRESTON FU</b>
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
          <a href="/files/Resume.pdf" target="_blank">
            <p className = "nav-link mr-8">
              Resume
            </p>
          </a>
          <a href="#contact">
            <p className = "nav-link">
              Contact
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
