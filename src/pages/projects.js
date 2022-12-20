/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SEO from 'react-seo-component';
import Layout from '~layouts/mainLayout';
import FirstProjectImage from '~assets/first.png';

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
                    project one
                  </p>
                  <p className="text-coolGray-600 dark:text-coolGray-400 prose leading-6 mb-3">
                    <ul>
                      <li>
                        React application for filtering photos by name with
                        design inspired by real sites
                      </li>
                      <li>Utilized public APIs to fetch data </li>
                      <li>
                        Gained experience in code architecture to separate
                        functional logic from UI logic
                      </li>
                    </ul>
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
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
}
