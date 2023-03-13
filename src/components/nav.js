import React from 'react';
import { Link } from 'gatsby';
import Logo from '~assets/logo-2.png';
import Toggle from '~components/toggle';

const Nav = () => (
  <nav className="sticky-nav flex justify-center items-center w-full py-4 my-0 md:mb-8 mx-auto bg-white dark:bg-coolGray-900">
    <div className="flex justify-between items-center max-w-4xl w-full">
      <div className="text-gray-900 dark:text-gray-100 font-semibold">
        <Link className="cursor-pointer" to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center space-x-4 justify-evenly text-gray-900 dark:text-gray-100">
        <Link className="cursor-pointer" to="/">
          Home
        </Link>
        {/* <Link className="cursor-pointer" to="/about">
          About
        </Link> */}
        <Link className="cursor-pointer" to="/projects">
          Projects
        </Link>
        {/* <Link className="cursor-pointer" to="/blog">
          Blog
        </Link> */}
        <Link className="cursor-pointer" to="/cert">
          Education
        </Link>
        <a
          href="https://docs.google.com/document/d/1mNBRub8M3t2bJ5RMne02pBPLrc0ZAg1i_W_Jro3AqjE/edit"
          target="_blank"
          rel="noreferrer"
          className="text-base text-coolGray-600 dark:text-coolGray-400 hover:text-gray-900"
        >
          <Link className="cursor-pointer">Resume</Link>
        </a>
        <Toggle />
      </div>
    </div>
  </nav>
);

export default Nav;
