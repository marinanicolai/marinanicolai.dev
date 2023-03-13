/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DevIconsSection from '~components/webdevicons';

const WelcomeSection = () => (
  <section className="mb-24">
    <div className=" flex justify-between items-center relative">
      <div className=" w-full space-y-8 md:flex-row-reverse md:justify-between">
        <div className="text-left">
          <StaticImage
            className="ml-15 mt-8 mb-16 ml-3 rounded-full h-36 w-36 ring-4 ring-offset-8 ring-offset-white dark:ring-offset-coolGray-900 ring-teal-500 dark:ring-teal-400 select-none"
            src="../assets/avatar.jpg"
            placeholder="blurred"
          />
          <DevIconsSection />
          <h1 className="p20 text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
            Hello! I'm <span>Marina</span>,
          </h1>
          <p className="text-coolGray-600 dark:text-coolGray-400 prose leading-6">
            I’m a educator and a <span>front end developer</span>. I create{' '}
            <span>React.js</span>, Node.js and WordPress applications for your
            business or organization. My experience coding responsive and
            engaging user interfaces <span>(from wireframe to deployment)</span>{' '}
            and teamwork attitude are my greatest assets. I look forward to
            combining my software engineering skills with my teaching ability
            and experience. Welcome to my website!
          </p>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-1/2 text-5xl leading-none text-coolGray-500 dark:text-coolGray-400 " />
  </section>
);

export default WelcomeSection;
