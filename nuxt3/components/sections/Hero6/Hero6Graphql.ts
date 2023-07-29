export const HERO6_GRAPHQL_QUERY = `
  ... on ComponentHeroHero6 {
    title
    description
    image {data{attributes{url}}}
    button {
      label
      link
    }
    positionHero6: position
  }
`;