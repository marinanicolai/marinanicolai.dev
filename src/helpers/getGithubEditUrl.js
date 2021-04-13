export const getGitHubEditURL = (slug) =>
  `https://github.com/MarinaNicolai/MarinaNicolai.dev/edit/main/data/blog${slug.slice(
    0,
    -1
  )}.mdx`;
