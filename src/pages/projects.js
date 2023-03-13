/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SEO from 'react-seo-component';
import Layout from '~layouts/mainLayout';
import FirstProjectImage from '~assets/first.png';
import TvImage from '~assets/tv-solid.svg';
import GithubImage from '~assets/github.svg';
import SecondProjectImage from '~assets/second.png';

import { useSiteMetadata } from '~hooks/useSiteMetadata';

export default function Toolbox() {
  const { title, image, siteUrl, siteLanguage, siteLocale, twitterUsername } =
    useSiteMetadata();
  return (
    <>
      <Layout>
        <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-orange-600 dark:text-orange-500 mb-3">
          Projects
        </h2>
        <div>
          <ul className="grid grid-cols-1 gap-8  mt-12">
            <li className="bg-coolGray-100 dark:bg-blueGray-800 rounded-3xl">
              <div className="p-6 md:p-10 flex flex-col-reverse ">
                <div className="mt-8 md:max-w-lg">
                  <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white mb-2">
                    Photo Gallery App
                  </p>
                  <p className="text-coolGray-600 dark:text-coolGray-400 prose leading-6 mb-3">
                    This is a fun-based project that fetches data from The
                    Unsplash Database API using React.js, allowing users to see
                    images, and search for specific image within Unsplash's
                    database. Users can select images and read additional
                    information about them: author and how many likes it got;
                    and saving it using the local storage. I built this
                    application application with create-react-app,
                    styled-components for CSS @reach/router for routing,
                    prop-types for components' output checking, and font-awesome
                    icons.
                  </p>
                  <div>
                    <a
                      href="https://unsplash-marinanicolai.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 mt-2">
                        <img className="tv" src={TvImage} alt="tvimg" />
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
                          className="tv"
                          src={GithubImage}
                          alt="github-img"
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
            {/* second */}
            <li className="bg-coolGray-100 dark:bg-blueGray-800 rounded-3xl">
              <div className="p-6 md:p-10 flex flex-col-reverse ">
                <div className="mt-8 md:max-w-lg">
                  <p className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white mb-2">
                    Next.js hotel App
                  </p>
                  <p className="text-coolGray-600 dark:text-coolGray-400 prose leading-6 mb-3">
                    This is a fun-based project that fetches data using
                    React.js, allowing users to see and and search for specific
                    rental property within database. Users can filter the
                    properties based on purpose, rent frequency, price,
                    size(sqft) and rooms. After selecting the item the user can
                    access additional information about it. I built this
                    application with create-react-app, using styled-components
                    for CSS; Next.js for SEO purpose, and font-awesome icons.
                  </p>
                  <div>
                    <a
                      href="https://real-estate-tau-lemon.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 mt-2">
                        <img className="tv" src={TvImage} alt="tvimg" />
                        <p>Visit the site</p>
                      </div>
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://real-estate-tau-lemon.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 mt-2">
                        <img
                          className="tv"
                          src={GithubImage}
                          alt="github-img"
                        />
                        <p>Code source</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="card highlight-on-hover">
                  <img
                    className="select-none"
                    src={SecondProjectImage}
                    alt="secondprojectimg"
                  />
                  <p className="title">Hotel app</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
}
