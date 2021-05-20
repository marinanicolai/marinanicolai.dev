import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import SEO from 'react-seo-component';
import dayjs from 'dayjs';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '~layouts/mainLayout';
import ProfileImage from '~assets/avatar.jpg';
import { useSiteMetadata } from '~hooks/useSiteMetadata';


const BlogPostTemplate = ({ data }) => {
  const {
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata();

  const { frontmatter, body, timeToRead, fields } = data.mdx;
  const { title, publishedAt, coverImage, summary } = frontmatter;
  const { slug } = fields;

  const getArticleDate = (day) => dayjs(day);

  return (
    <>
      <Layout>
        <SEO
          title={title}
          titleSeparator="|"
          titleTemplate="Blog"
          description={summary}
          image={
            coverImage === null
              && `${siteUrl}${image}`
          }
          pathname={`${siteUrl}/blog${slug}`}
          siteLanguage={siteLanguage}
          siteLocale={siteLocale}
          twitterUsername={twitterUsername}
          authorName={authorName}
          article
          publishedDate={publishedAt}
          modifiedDate={new Date(Date.now()).toISOString()}
        />

        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 md:mb-6 text-coolGray-900 dark:text-white">
          {frontmatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-4 md:mb-6">
          <div className="flex items-center">
            <img
              className="rounded-full"
              width={28}
              height={28}
              src={ProfileImage}
              alt="Marina Nicolai"
            />
            <p className="text-sm text-coolGray-600 dark:text-coolGray-400 ml-2">
              <a
                className="text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
                href="https://twitter.com/MarinaNicolai"
                rel="noreferrer"
                target="_blank"
              >
                Marina Nicolai
              </a>
              {' / '}
              {getArticleDate(frontmatter.publishedAt).format('MMMM DD, YYYY')}
            </p>
          </div>
          <p className="text-sm text-coolGray-600 dark:text-coolGray-400 min-w-32 mt-2 md:mt-0">
            {timeToRead * 2}
            {` minute read`}
          </p>
        </div>
        {frontmatter.coverImage ? (
          <GatsbyImage
            image={frontmatter.coverImage?.childImageSharp?.gatsbyImageData}
            alt="Cover"
            className="mb-8 rounded-lg"
          />
        ) : null}
        <div className="text-coolGray-600 dark:text-coolGray-400 prose">
          <MDXRenderer className="prose">{body}</MDXRenderer>
        </div>
       
        <div className="text-coolGray-600 dark:text-coolGray-400 italic flex justify-start md:justify-end space-x-3">
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        publishedAt
        summary
        coverImage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }        
      }
      body
      timeToRead
      fields {
        slug
      }
    }
  }
`;

export default BlogPostTemplate;
