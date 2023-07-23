export const HERO3_GRAPHQL_QUERY = `
  ... on ComponentHeroHero3 {
    title
    description
    image {data{attributes{url}}}
    button {
      label
      link
    }
  }
`;