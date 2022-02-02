import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../data/contactIconData';

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="h-auto flex flex-col items-center sm:grid grid-cols-2">
        <div className="py-2 sm:py-6 sm:ml-6 ">
          <p className="text-xs lg:text-sm text-gray-500">
            © PRESTON FU. Thanks to <a
              href="https://henryweng.com"
              target="_blank"
              rel="noreferrer"
              className='footer-link'>Henry Weng</a> for this website's design.
          </p>
        </div>
        <div className="flex justify-end items-center space-x-5">
          <ul className="icons">
            {data.map((s) => (
              <a className="py-6 mr-5 footer-contact-icon-link" href={s.link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={s.icon} />
              </a>
            ))}
          </ul>
        </div>
        <div className="pb-6 sm:pb-0" />
      </div>
    </div>
  )
}

export default Footer
