import React from 'react';
import FirstProjectImage from '~assets/first.png';
import TvImage from '~assets/tv-solid.svg';
import GithubImage from '~assets/github.svg';

const ProjectsSection = () => (
  <section className="mb-24">
    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-orange-600 dark:text-orange-500 mb-3">
      Code Samples
    </h2>
    {/* <div className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
      <p className="mb-2">I like to build things.</p>
      <p className="mb-8">Here's a few.</p>
    </div> */}

    <ul className="grid grid-cols-1 gap-8  mt-12">
      <li className="bg-coolGray-100 dark:bg-blueGray-800 rounded-3xl">
        <div className="p-6 md:p-10 flex flex-col-reverse ">
          <div className="mt-8 md:max-w-lg">
            <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white mb-2">
              Photo Gallery App
            </p>
            <p className="text-coolGray-600 dark:text-coolGray-400 prose leading-6 mb-3">
              This is a fun-based project that fetches data from The Unsplash
              Database API using React.js, allowing users to see images, and
              search for specific image within Unsplash's database. Users can
              select images and read additional information about them: author
              and how many likes it got; and saving it in their profile. I built
              this application with create-react-app, styled-components for CSS
              styling, @reach/router for routing, prop-types for components'
              output checking, and font-awesome icons.
            </p>
            <div>
              <a
                href="https://unsplash-marinanicolai.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 mt-2">
                  <img className="select-none tv" src={TvImage} alt="tvimg" />
                  <p>Visit the site</p>
                </div>
              </a>
            </div>

            <div>
              <a
                href="https://github.com/marinanicolai/unsplash-hooks-portofolio"
                target="_blank"
                rel="noreferrer"
              >
                <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 mt-2">
                  <img
                    className="select-none tv"
                    src={GithubImage}
                    alt="tvimg"
                  />
                  <p>Code source</p>
                </div>
              </a>
            </div>
          </div>
          <div className="card highlight-on-hover">
            <img
              className="select-none"
              src={FirstProjectImage}
              alt="firstprojectimg"
            />
            <p className="title">Photo app</p>
          </div>
        </div>
      </li>
      {/* <li className="bg-coolGray-100 dark:bg-blueGray-800 rounded-3xl">
        <div className="p-6 md:p-10 flex flex-col-reverse ">
          <div className="mt-8 md:max-w-lg">
            <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white mb-2">
              project one
            </p>
            <p className="text-coolGray-600 dark:text-coolGray-400 prose leading-6 mb-3">
              Description
            </p>
            <a
              href="https://unsplash-marinanicolai.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 mt-2">
                <p>Visit the live website</p>
              </div>
            </a>
            <a
              href="https://github.com/marinanicolai/unsplash-hooks-portofolio"
              target="_blank"
              rel="noreferrer"
            >
              <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 mt-2">
                <p>Code source</p>
              </div>
            </a>
          </div>
          <div>
            <img
              className="select-none"
              src={FirstProjectImage}
              alt="firstprojectimg"
            />
          </div>
        </div>
      </li> */}
    </ul>
  </section>
);

export default ProjectsSection;
