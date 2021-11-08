/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SEO from 'react-seo-component';
import Layout from '~layouts/mainLayout';

import { useSiteMetadata } from '~hooks/useSiteMetadata';

export default function Toolbox() {
  const {
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();
  return (
    <>
      <Layout>
        <ul>
        <li><h3>[CompTia Security +](link-to-the-photo)</h3></li>
        <li><h3>[NOVA web development and design](link-to-the-photo) </h3></li>
        <li><h3> [Udemy: JavaScript:Understanding the weird parts](link-to-the-photo) </h3></li>
       <li><h3> [Udemy: JavaScript Algorithms and Data Structures Masterclass](link-to-the-photo) </h3></li>
       </ul>
      </Layout>
    </>
  );
}
