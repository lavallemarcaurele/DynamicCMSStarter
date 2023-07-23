export const Hero3Graphql = `
  ... on ComponentHeroHero3 {
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