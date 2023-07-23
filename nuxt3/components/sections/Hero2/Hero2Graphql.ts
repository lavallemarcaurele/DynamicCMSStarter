export const HERO2_GRAPHQL_QUERY = `
  ... on ComponentHeroHero2 {
    title
    description
    image {data{attributes{url}}}
    button {
      label
      link
    }
    positionHero2: position
  }
`;