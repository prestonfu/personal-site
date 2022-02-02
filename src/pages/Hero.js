import React from 'react';
import Typewriter from 'typewriter-effect';
import typewriterList from '../data/hero/typewriterList';
import bio from '../data/hero/bio';


const Hero = () => {
  return (
    <div>
      <div className="relative h-screen flex items-center">

        <div className="mx-auto max-w-6xl sm:pl-16 z-0">
          {/* <div className="hero-grid"> */}
          <div className="flex justify-center text-center sm:text-left grid sm:grid-cols-12">
            <div className="sm:col-span-1 md:col-span-3">
              <img className="rounded-full flex justify-center md:block" width="80%" src="../images/me.png" />
            </div>
            <div className="sm:col-span-9 md:col-span-8">
              <h1 className="mx-6 sm:mx-0 hero-header">Hi! I'm Preston.</h1>

              {/*this div creates flex tag, which is needed to put typewriter & text on same line*/}
              <div className="justify-center sm:justify-start flex hero-header">
                <h2 className="hidden sm:block hero-header">
                  I like&nbsp;
                </h2>
                <h1 className="hidden sm:block hero-header">
                  <Typewriter
                    options={{
                      strings: typewriterList,
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 20,
                      pauseFor: 1500,
                      cursor: "|"
                    }}
                  >
                  </Typewriter>
                </h1>
              </div>
              <div className="flex mt-6 mx-6 sm:mx-0">
                {bio}
              </div>
              {/* <div className="h-10" /> */}
              {/* <a href="/projects/math">
                    <button className="outline-button mt-6 mr-8">
                      Math →
                    </button>
                  </a>
                  <a href="/projects/cs">
                    <button className="outline-button mt-6 mr-8">
                      Computer Science →
                    </button>
                  </a>
                  <a href="/projects/writing">
                    <button className="outline-button mt-6 mr-8">
                      Writing →
                    </button>
                  </a> */}
              {/* <a href="/resume">
                    <button className="outline-button mt-6">
                      LEARN MORE →
                    </button>
                  </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
