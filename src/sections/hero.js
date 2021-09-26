import React from 'react';
import Typewriter from 'typewriter-effect';
import './hero-background.css'


const Hero = () => {
  return (
    <div>
      <div className="relative h-screen hero-background flex items-center">

        <div className="mx-auto max-w-6xl sm:pl-16 z-0">
          {/* <div className="hero-grid"> */}
            <div className="flex justify-center text-center sm:text-left sm:grid sm:grid-cols-12">
              <div className="sm:col-span-10 md:col-span-9">
                <h1 className="mx-6 sm:mx-0 hero-header">Hi! I'm Preston.</h1>
                
                {/*this div creates flex tag, which is needed to put typewriter & text on same line*/}
                <div className="justify-center sm:justify-start flex hero-header">
                  <h2 className="hidden sm:block hero-header">
                    I like&nbsp;
                  </h2>
                  <h1 className="hidden sm:block hero-header">
                    <Typewriter
                        options={{
                          strings: [
                            '<b>solving real-world problems.</b>',
                            '<b>learning cool things.</b>', 
                            '<b>meeting new people.</b>',
                            '<b>traveling the world.</b>',
                            '<b>folding modular origami.</b>',
                          ],
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
                  <p>
                    I'm a student at Saratoga High School and math and 
                    computer science enthusiast. I'm specifically interested 
                    in topology, analytic number theory, algorithms, and deep
                    learning. As an ardent supporter of promoting equity in 
                    education, I'm also a cofounder of <a className="link" href="/bio#everaise">
                      Everaise Academy
                      </a>,
                    an online STEM school with over 1,500 students spanning 40 countries.
                  </p>
                </div>
                <div className="h-10" />
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
                  <a href="/resume">
                    <button className="outline-button mt-6">
                      LEARN MORE →
                    </button>
                  </a>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Hero
