import React from 'react';
import Typewriter from 'typewriter-effect';
import './hero-background.css'


const Construction = () => {
  return (
    <div>
      <div className="relative h-screen hero-background flex items-center">

        <div className="mx-auto max-w-6xl sm:pl-16 z-0 justify-center">
          {/* <div className="hero-grid"> */}
              <h1 className="hero-header">
                <b>This site is currently under construction.</b>
              </h1>
              <p>
                Check back soon — it'll be up and running shortly!
              </p>
        </div>
      </div>
    </div>
  )
}

export default Construction
