export const Hero4Graphql = `
  ... on ComponentHeroHero4 {
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
  }
`;