import React from 'react';
import Typewriter from 'typewriter-effect';
import "../index.css"
import './hero-background.css'

const HonorsAwards = () => {
  return (
    <div className="h-auto bg-white">
      <div className="mx-auto max-w-6xl md:pl-16 z-0">
        <div className="h-12" />
        <div className="honors-awards-grid">
          <h2 className = "text-center md:text-left section-header">
            <b>Honors &amp; Awards</b>
          </h2>
          <div className="col-start-2 mt-12 px-8 md:mt-0 col-end-2 md:pl-6 md:pr-16">
            <div className="flex justify-center md:justify-start flex-wrap">
              <div className="tag-outline-wrapper">
                <p className="text-xs sm:text-sm font-inter"><b>USA Junior Math Olympiad ∙ Top 80 Nationally</b>, 2020</p>
              </div>
              <div className="tag-outline-wrapper">
                <p className="text-xs sm:text-sm font-inter"><b>USA Physics Olympiad ∙ Honorable Mention, Top 150 Nationally</b>, 2021</p>
              </div>
              <div className="tag-outline-wrapper">
                <p className="text-xs sm:text-sm font-inter"><b>USA Computing Olympiad Gold Division</b>, 2018</p>
              </div>
              <div className="tag-outline-wrapper">
                <p className="text-xs sm:text-sm font-inter"><b>Canadian Open Mathematics Challenge ∙ Honorable Mention, Top 8 Internationally</b>, 2020</p>
              </div>
              <div className="tag-outline-wrapper">
                <p className="text-xs sm:text-sm font-inter"><b>American Regions Mathematics League ∙ Top 30 Nationally</b>, 2020 <b>∙ Team 1st Internationally</b>, 2021</p>
              </div>
              <div className="tag-outline-wrapper">
                <p className="text-xs sm:text-sm font-inter"><b>Physics Bowl Division I ∙ Team 2nd Nationally</b>, 2021</p>
              </div>
              <div className="tag-outline-wrapper">
                <p className="text-xs sm:text-sm font-inter"><b>US Math Competition Association Premier Division ∙ Team 4th Nationally</b>, 2020</p>
              </div>
              <div className="tag-outline-wrapper">
                <p className="text-xs sm:text-sm font-inter"><b>Stanford Math Tournament ∙ Algebra 1st</b>, 2019 <b>∙ Geometry 5th</b>, 2020 <b>∙ Calculus 8th</b>, 2019 <b>∙ Team 1st</b>, 2021</p>
              </div>
              <div className="tag-outline-wrapper">
                <p className="text-xs sm:text-sm font-inter"><b>Tests of Engineering Aptitude, Math, Science National Qualifier</b>, 2019–2020</p>
              </div>
              <div className="tag-outline-wrapper">
                <p className="text-xs sm:text-sm font-inter"><b>California Math Council Certificate Award</b>, 2021</p>
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
