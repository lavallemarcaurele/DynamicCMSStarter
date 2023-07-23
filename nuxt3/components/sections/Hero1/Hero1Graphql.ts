export const HERO1_GRAPHQL_QUERY = `
  ... on ComponentHeroHero1 {
    title
    description
    image {data{attributes{url}}}
    button {
      label
      link
    }
    positionHero1: position
  }
`;