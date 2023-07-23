export const Hero1Graphql = `
  ... on ComponentHeroHero1 {
    title
    description
    image {
      data {
        attributes {
          url
        }
      }
    }
    button {
      label
      link
    }
    positionHero1: position
  }
`;