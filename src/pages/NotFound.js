import React from 'react';


const NotFound = () => {
  return (
    <div>
      <div className="relative h-screen flex items-center">

        <div className="mx-auto max-w-6xl sm:pl-16 z-0 justify-center">
          {/* <div className="hero-grid"> */}
              <h1 className="hero-header">
                <b>404</b>
              </h1>
              <p>
                Page not found. (Unless you were looking for this.)
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
