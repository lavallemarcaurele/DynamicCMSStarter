export const HERO4_GRAPHQL_QUERY = `
  ... on ComponentHeroHero4 {
    title
    description
    image {data{attributes{url}}}
    button {
      label
      link
    }
  }
`;