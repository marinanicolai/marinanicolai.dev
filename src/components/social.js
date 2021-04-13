import React from 'react';
import { FaTwitter, FaCodepen, FaLinkedin } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

const SocialIcons = ({ children }) => (
  <div>
    <div className="social-icons hidden md:block md:text-2xl md:text-coolGray-500 dark:text-coolGray-400">
      <a
        href="https://twitter.com/MarinaNicolai"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter className="mb-8 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-2" />
      </a>

      <a
        href="https://codepen.io/MarinaNicolai"
        target="_blank"
        rel="noreferrer"
      >
        <FaCodepen className="mb-8 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-2" />
      </a>
      <a href="https://blog.MarinaNicolai.dev/" target="_blank" rel="noreferrer">
        <SiHashnode className="mb-8 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-2" />
      </a>
      <a
        href="https://www.linkedin.com/in/Marina-Nicolai/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="mb-8 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-2" />
      </a>
    </div>
    {children}
  </div>
);

export default SocialIcons;
