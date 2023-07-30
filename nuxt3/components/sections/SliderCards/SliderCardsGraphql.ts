export const SLIDERCARDS_GRAPHQL_QUERY = `
  ... on ComponentSliderSliderDeCartes {
    uptitle
    title
    cards {
      image {data{attributes{url}}}
      title
      description
      button {
        label
        link
      }
    }
  }
`;