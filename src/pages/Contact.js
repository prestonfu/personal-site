import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../data/contactIconData';


const NotFound = () => {
  return (
    <div>
      <div className="relative h-screen flex items-center">

        <div className="mx-auto max-w-6xl sm:pl-16 z-0 justify-center">
          {/* <div className="hero-grid"> */}
          <h1 className="hero-header">
            <b>Contact</b>
          </h1>
          <div className="h-8" />
          <p>
            Feel free to get in touch!
          </p>
          <div className="h-4" />

          <ul className="icons">
            {data.map((s) => (
              <a className="py-6 mr-5 page-contact-icon-link" href={s.link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={s.icon} />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NotFound
