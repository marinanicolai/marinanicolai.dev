import React from 'react';
import { Link } from 'gatsby';

const AboutSection = () => (
  <section className="mb-16">
    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-amber-500 dark:text-amber-400 mb-3">
      About Me
    </h2>
    <p className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
      Here's my story.
    </p>
    <div className="text-coolGray-600 dark:text-coolGray-400 prose leading-6 mb-6">
      <p>
        I’m Marina, a junior front-end developer, creative coder and
        self-proclaimed designer who has a passion for the front-end spectrum.
      </p>
      <p>
        I love creating, whether those things are web applications,{' '}
        <a
          className="underline text-amber-500 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300"
          href="https://codepen.io/MarinaNicolai"
          target="_blank"
          rel="noreferrer"
        >
          CodePen creations,
        </a>{' '}
        or tinkering around in Photoshop or Illustrator.
      </p>
      <p>
        I specialize in front-end development and make it my mission to
        translate user-focussed designs into pixel-perfect websites or
        applications that run blazing fast.
      </p>
      <p>
        I always like learning new things. I often write about my findings on my{' '}
        <Link
          className="underline text-amber-500 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300"
          to="/blog"
        >
          blog,
        </Link>{' '}
      </p>
    </div>
  </section>
);

export default AboutSection;
