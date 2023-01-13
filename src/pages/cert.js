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
          Education:
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
            <a
              href="https://www.udemy.com/certificate/UC-41bafa2a-fc02-4afe-9a89-6045884ab69c/"
              target="_blank"
              rel="noreferrer"
              className="text-base text-coolGray-600 dark:text-coolGray-400 hover:text-gray-900"
            >
              Getting started with React Hooks
            </a>
          </li>
          <li>
            <a
              href="https://www.udemy.com/certificate/UC-838393d9-f09a-4ab3-bd04-0916b13f3b81/"
              target="_blank"
              rel="noreferrer"
              className="text-base text-coolGray-600 dark:text-coolGray-400 hover:text-gray-900"
            >
              Javascript Algorithms and Data Structures
            </a>
          </li>
          <li>
            <a
              href="https://www.udemy.com/certificate/UC-defe037f-2c07-4d9e-8ebf-972c179499be/"
              target="_blank"
              rel="noreferrer"
              className="text-base text-coolGray-600 dark:text-coolGray-400 hover:text-gray-900"
            >
              CompTia Security+ Certification(SYO-501)
            </a>
          </li>
        </ul>
      </Layout>
    </>
  );
}
