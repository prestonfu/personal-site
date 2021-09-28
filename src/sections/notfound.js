import React from 'react';
import Typewriter from 'typewriter-effect';
import './hero-background.css'


const NotFound = () => {
  return (
    <div>
      <div className="relative h-screen hero-background flex items-center">

        <div className="mx-auto max-w-6xl sm:pl-16 z-0 justify-center">
          {/* <div className="hero-grid"> */}
              <h1 className="hero-header">
                <b>404</b>
              </h1>
              <p>
                The page you're looking for cannot be found. (Unless you were looking for this.)
              </p>

              <a href="/">
                <button className="outline-button mt-6">
                  Return home →
                </button>
              </a>
        </div>
      </div>
    </div>
  )
}

export default NotFound
