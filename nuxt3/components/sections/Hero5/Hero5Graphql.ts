export const HERO5_GRAPHQL_QUERY = `
  ... on ComponentHeroHero5 {
    title
    description
    images {data{attributes{url}}}
    button {
      label
      link
    }
  }
`;