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
    <h1>this is the project page</h1>
      </Layout>
    </>
  );
}
