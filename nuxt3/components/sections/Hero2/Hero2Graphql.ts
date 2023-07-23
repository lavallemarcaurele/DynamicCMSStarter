export const Hero2Graphql = `
  ... on ComponentHeroHero2 {
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
    positionHero2: position
  }
`;