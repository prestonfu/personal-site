import React from 'react';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div className = "bg-gray-200">
    <div className="h-auto flex flex-col items-center sm:grid grid-cols-2">
      <div className="py-2 sm:py-6 sm:ml-6 ">
        <p className = "text-xs lg:text-sm">© PRESTON FU. Credit to <a href="https://github.com/henryweng03/personal-site" target="_blank">Henry Weng</a> for this website template.</p>
      </div>
      <div className = "flex justify-end items-center space-x-4">
        <a className="sm:py-6" href="mailto:prestonmfu@gmail.com">
          <p className = "footer-link font-bold">
            Email
          </p>
        </a>
        <a className="sm:py-6" href="https://www.linkedin.com/in/preston-fu/">
          <p className = "footer-link font-bold">
            LinkedIn
          </p>
        </a>
        <a className="sm:py-6" href="https://github.com/prestonfu">
          <p className = "footer-link font-bold sm:mr-6">
            GitHub
          </p>
        </a>
      </div>
      <div className = "pb-6 sm:pb-0"/>
    </div>
    </div>
  )
}

export default Footer
