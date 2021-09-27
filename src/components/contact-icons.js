import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../data/contactIconData';

const ContactIcons = () => (
  <ul className="icons">
    {data.map((s) => (
        <a className="sm:py-6 sm:mr-5 contact-icon-link" href={s.link} target="_blank">
          <FontAwesomeIcon icon={s.icon} />
        </a>
    ))}
  </ul>
);

export default ContactIcons;