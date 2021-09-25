import React from 'react';
import Typewriter from 'typewriter-effect';
import "../index.css"
import './hero-background.css'

const Experience = () => {
  return (
    <div className="h-auto bg-white">
      <div className="mx-auto max-w-6xl md:pl-16 z-0">
        <div className="h-12" />
        <div className="experience-grid">
          <h2 className = "text-center md:text-left section-header">
            <b>Experience</b>
          </h2>
          <div className="col-start-2 mt-12 px-8 md:mt-0 col-end-2 md:pl-6 md:pr-16">
            <h3>Research Intern @ <a href="https://www.bu.edu/eng/departments/se/" className="link" target="_blank" rel="noreferrer">Division of Systems Engineering, Boston University</a></h3>
            <p className="date">2021</p>
            <ul className="list-square pl-8 pt-3">
              <li>Advised by James Queeney and Professor Ioannis Paschalidis in development of MuJoCo-compatible locomotion and food collection environments</li>
              <li>Significantly reduced dimensionality of robotic rodent model’s action space through principal component analysis on virtual actuators</li>
              <li>Enables faster prototyping of novel reinforcement learning algorithms and efficient testing of neuroscience hypotheses for autonomous navigation in unstructured domains; motivates real-world biological experiments</li>
            </ul>
            <div id="everaise" className="h-8"></div>
            <h3>Co-founder &amp; Program Coordinator @ <a href="https://everase.org/" className="link" target="_blank" rel="noreferrer">Everaise Academy</a></h3>
            <p className="date">2020 - Present</p>
            <ul className="list-square pl-8 pt-3">
              <li>Co-founded nonprofit online STEM school with 1500+ students from 40+ countries</li>
              <li>Directed web and STEM curriculum development, publishing, and delivery; managed program-wide competitions and events</li>
              <li>Recruited over 50 volunteers as instructors and curriculum developers; organized sponsorships and partnerships; sought professors and industry leaders to give guest lectures</li>
            </ul>
            <div className="h-8"></div>
            <h3>Curriculum Developer @ <a href="https://alphastar.academy" className="link" target="_blank" rel="noreferrer">AlphaStar Academy</a></h3>
            <p className="date">2019</p>
            <ul className="list-square pl-8 pt-3">
              <li>Employed as member of Math Development Team: Wrote challenging problems for middle and high school students</li>
            </ul>
            </div>
          </div>
          <div className="h-12" />
        </div>
    </div>
  )
}

export default Experience
