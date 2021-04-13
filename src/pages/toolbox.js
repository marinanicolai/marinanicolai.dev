import React from 'react';
import SEO from 'react-seo-component';
import Layout from '~layouts/mainLayout';
import { useSiteMetadata } from '~hooks/useSiteMetadata';

const ToolboxItem = ({ href, title, description }) => (
  <li className="text-coolGray-500 dark:text-coolGray-400 text-base sm:text-lg lg:text-base xl:text-lg">
    <a href={href} target="_blank" rel="noreferrer" className="underline">
      {title}
    </a>
    {description ? <span> - {description}</span> : null}
  </li>
);

export default function Toolbox() {
  const {
    title,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();
  return (
    <>
      <SEO
        title={title}
        titleTemplate="Toolbox"
        titleSeparator="|"
        description={`Here's what I use on a day-to-day basis.`}
        image={`${siteUrl}/images/ToolboxBanner.png`}
        pathname={`${siteUrl}/toolbox`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Layout
        titleTemplate="Toolbox"
        description="Here's what I use on a day-to-day basis."
      >
        <section>
          <div className="mb-8">
            <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-orange-600 dark:text-orange-500 mb-3">
              Toolbox
            </h2>
            <p className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8">
              Here is what I use on a day-to-day basis.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white">
              Code Editor & Extensions
            </h2>
            <ul className="text-secondary ml-6 space-y-2 list-disc">
              <ToolboxItem
                href="https://code.visualstudio.com/"
                title="Visual Studio Code"
                description="Code Editor"
              />
              <ToolboxItem
                href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl"
                title="Night Owl"
                description="A theme by Sarah Drasner"
              />
              <ToolboxItem
                href="https://www.monolisa.dev/"
                title="MonoLisa"
                description="A font for software developers"
              />
              <ToolboxItem
                href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2"
                title="Bracket Pair Colorizer 2"
                description="A customizable extension for
                  colorizing matching brackets"
              />
              <ToolboxItem
                href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow"
                title="Indent Rainbow"
                description="Makes indentation easier to read"
              />
              <ToolboxItem
                href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
                title="Prettier"
                description="Code formatter"
              />
              <ToolboxItem
                href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
                title="Tailwind CSS IntelliSense"
                description="Intelligent Tailwind CSS tooling
                  for VSCode"
              />
              <ToolboxItem
                href="https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons"
                title="VSCode Great Icons"
                description="Icon pack for VSCode"
              />
            </ul>

            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white">
                Terminal
              </h2>
              <ul className="text-secondary ml-6 space-y-2 list-disc">
                <ToolboxItem
                  href="https://hyper.is/"
                  title="Hyper"
                  description="A beautiful and extensible terminal experience"
                />
                <ToolboxItem
                  href="https://hyper.is/store/hyper-night-owl"
                  title="hyper-night-owl"
                  description="A beautiful theme for the Hyper terminal
                  based on the Night Owl VSCode theme"
                />
                <li className="text-coolGray-500 dark:text-coolGray-400 text-base sm:text-lg lg:text-base xl:text-lg">
                  VSCode integrated terminal
                </li>
              </ul>
            </div>       
           
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white">
                My portfolio
              </h2>
              <ul className="text-secondary ml-6 space-y-2 list-disc">
                <ToolboxItem
                  href="https://www.gatsbyjs.com/"
                  title="Gatsby"
                  description="A React based static site generator built on top of GraphQL"
                />
                <ToolboxItem
                  href="https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/"
                  title="MDX"
                  description="Markdown in the component era. Allows JSX embedds inside markdown, useful for blog posts and documentation"
                />
                <ToolboxItem
                  href="https://tailwindcss.com/"
                  title="TailwindCSS"
                  description="A utility-first CSS framework packed with pre-built classes that can be composed to build any design, directly in your markup "
                />
                <ToolboxItem
                  href="https://github.com/FormidableLabs/prism-react-renderer"
                  title="Prism React Renderer"
                  description="A React component used to highlight code blocks"
                />
                <ToolboxItem
                  href="https://buttondown.email/"
                  title="Buttondown"
                  description="A small, elegant tool for producing newsletters"
                />
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
