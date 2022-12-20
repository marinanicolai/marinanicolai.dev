/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SEO from 'react-seo-component';
import Layout from '~layouts/mainLayout';

import { useSiteMetadata } from '~hooks/useSiteMetadata';

export default function Toolbox() {
  const { title, image, siteUrl, siteLanguage, siteLocale, twitterUsername } =
    useSiteMetadata();
  return (
    <>
      <Layout>
        <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-orange-600 dark:text-orange-500 mb-3">
          Certifications:
        </h2>
        <ul>
          <li>
            <a
              href="https://docs.google.com/document/d/1nbjFaltFLUohQ9RRE4BC2a-E2mEDkpUGa94k85VYQ54/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-base text-coolGray-600 dark:text-coolGray-400 hover:text-gray-900"
            >
              CompTia Security +
            </a>
          </li>

         
          <li>
          <a
              href="https://docs.google.com/document/d/18QZtiRl8lHZDSuREcUTTc2MWLFy85zvTshKpyTkvdQM/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-base text-coolGray-600 dark:text-coolGray-400 hover:text-gray-900"
            >
             NOVA Web Design and Development Certificate
            </a>
          </li>
          <li>
            <h3>
              {' '}
              [Udemy: JavaScript:Understanding the weird
              parts](link-to-the-photo){' '}
            </h3>
          </li>
          <li>
            <h3>
              {' '}
              [Udemy: JavaScript Algorithms and Data Structures
              Masterclass](link-to-the-photo){' '}
            </h3>
          </li>
        </ul>
      </Layout>
    </>
  );
}
