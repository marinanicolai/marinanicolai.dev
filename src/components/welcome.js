/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const WelcomeSection = () => (
  <section className="mb-24">
    <div className=" flex justify-between items-center relative">
      <div className=" w-full space-y-8 md:flex-row-reverse md:justify-between">
        <div className="text-left">
          <StaticImage
            className="mt-8 mb-16 ml-3 rounded-full h-36 w-36 ring-4 ring-offset-8 ring-offset-white dark:ring-offset-coolGray-900 ring-teal-500 dark:ring-teal-400 select-none"
            src="../assets/avatar.jpg"
            placeholder="blurred"
          />
          <h1 className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
            I'm Marina, front-end developer from Montross, VA!
          </h1>
          <p className="text-coolGray-600 dark:text-coolGray-400 prose leading-6">
            My journey into becoming a Front-end developer began when I noticed
            that some websites are a pleasure to use whereas others felt
            confusing and difficult. I wanted to understand who builds them and
            how they are built. This is when my journey into front-end
            development began. I went from initially being self-taught to
            completing a Computer Science degree and then becoming a freelance
            developer. I have now decided to seek a full-time permanent role
            where I can learn from senior developers and contribute to a
            development team.My goal is to guide and teach junior web developers
            in 5 years joining the company.
          </p>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-1/2 text-5xl leading-none text-coolGray-500 dark:text-coolGray-400 " />
  </section>
);

export default WelcomeSection;
