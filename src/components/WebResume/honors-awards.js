import React from 'react';
import Typewriter from 'typewriter-effect';

const HonorsAwards = () => {
  return (
    <div className="h-auto">
      <div className="mx-auto max-w-6xl md:pl-16 z-0">
        <div className="h-12" />
        <div className="honors-awards-grid">
          <h2 className = "text-center md:text-left section-header">
            <b>HONORS &amp; AWARDS</b>
          </h2>
          <div className="col-start-2 mt-12 px-8 md:mt-0 col-end-2 md:pl-6 md:pr-16">
            <div className="flex justify-center md:justify-start flex-wrap">
              <div className="tag-outline-wrapper">
                <p className="text-xs sm:text-sm font-inter">USA Junior Math Olympiad Top 80 Nationally, 2020</p>
              </div>
              <div className="tag-outline-wrapper">
                <p className="text-xs sm:text-sm font-inter">USA Physics Olympiad Honorable Mention Top 150 Nationally, 2021</p>
              </div>
              <div className="tag-outline-wrapper">
                <p className="text-xs sm:text-sm font-inter">USA Computing Olympiad Gold Division, 2018</p>
              </div>
              <div className="tag-outline-wrapper">
                <p className="text-xs sm:text-sm font-inter">American Regions Mathematics League Top 30 Nationally, 2020</p>
              </div>
              <div className="tag-outline-wrapper">
                <p className="text-xs sm:text-sm font-inter">Tests of Engineering Aptitude, Math, Science National Qualifier, 2019–2020</p>
              </div>
              <div className="tag-outline-wrapper">
                <p className="text-xs sm:text-sm font-inter">California Math Council Certificate Award, 2021</p>
              </div>
            </div>
          </div>
          <div className="h-12" />
        </div>
      </div>
    </div>
  )
}

export default HonorsAwards;
