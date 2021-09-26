import React from 'react';
import "../index.css"
import './hero-background.css'


const Education = () => {
  return (
    <div className="h-auto bg-white">
      <div className="mx-auto max-w-6xl sm:pl-16 z-0">
        <div className="h-12" />
        <h2 className = "text-center lg:text-left section-header">
          <b>Education</b>
        </h2>
        <div className="px-8 sm:pr-16 sm:pl-0 mt-12">

          <div className="education-grid">
            <div className = "flex justify-center md:block">
              <img className="rounded-lg h-2/3 w-2/3 md:w-auto md:h-auto" src="../images/saratoga.jpg" alt="Saratoga High" />
            </div>
            <div className="mt-6 md:mt-0 md:pl-10 ">
              <div id="shs" />
              <div className = "flex justify-center md:block">
                <h3>
                  <a href="https://www.saratogahigh.org/" className="link" target="_blank" rel="noreferrer">Saratoga High School</a>
                </h3>
              </div>
              <div className = "flex justify-center md:block">
                <p className="date">GPA: 4.51 <b>∙</b> SAT: 1590 <b>∙</b> ACT: 36</p>
              </div>
              <div className="h-4"/>
              <div className = "flex justify-center md:block">
                <p>Activities &amp; Societies</p>
              </div>
              <div className="h-2"></div>
              <div className="flex justify-center md:justify-start flex-wrap">
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-inter">Math Club President &amp; Team Captain</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-inter">Engineering Club President &amp; Team Captain</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-inter">Superintendent Advisory Board</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-inter">Saratoga Falcon Newspaper Opinion Editor</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-inter">Toga Junior Math Club Liaison &amp; Head Coach</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-inter">Boys Team Charity Saratoga Chapter President</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-inter">Varsity Tennis</p>
                </div>
              </div>
              <div className="h-4"/>
              <div className = "flex justify-center md:block">
                <p>Relevant Coursework</p>
              </div>
              <div className="h-2"></div>
              <div className="flex justify-center md:justify-start flex-wrap">
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-inter">Real Analysis</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-inter">Linear Algebra</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-inter">Differential Equations</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-inter">Multivariable Calculus</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-inter">Data Structures</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-inter">Discrete Math</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-inter">AP Computer Science</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-inter">AP Statistics</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-inter">AP Calculus BC</p>
                </div>
              </div>
           </div>
          </div>
          <div className="h-4" />

          <div className="px-8 sm:pr-16 sm:pl-0 mt-12">
            <div className="education-grid">
              <div className = "flex justify-center md:block">
                <img className="rounded-lg h-2/3 w-2/3 md:w-auto md:h-auto" src="../images/coursera.png" alt="Additional Coursework" />
              </div>
              <div className="mt-6 md:mt-0 md:pl-10 ">
                <div className = "flex justify-center md:block">
                  <h3>
                    <a className="link" target="_blank" rel="noreferrer">Additional Coursework</a>
                  </h3>
                </div>
              <div className="h-2"></div>
                <div className="flex justify-center md:justify-start flex-wrap">
                  <a href="https://www.deeplearning.ai/program/deep-learning-specialization/" target="_blank">
                  <div className="tag-outline-wrapper">
                    <p className="text-xs sm:text-sm font-inter">Coursera/Deeplearning.AI: 5-course Deep Learning Specialization</p>
                  </div>
                  </a>
                  <a href="https://www.coursera.org/specializations/algorithms" target="_blank">
                    <div className="tag-outline-wrapper">
                      <p className="text-xs sm:text-sm font-inter">Coursera/Stanford: Algorithms Specialization</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-12"></div>
        </div>
      </div>
    </div>
  )
}

export default Education
