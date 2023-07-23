import { ref, onMounted } from 'vue'
import { HERO1_GRAPHQL_QUERY } from '../components/sections/Hero1/Hero1Graphql';
import { HERO2_GRAPHQL_QUERY } from '../components/sections/Hero2/Hero2Graphql';
import { HERO3_GRAPHQL_QUERY } from '../components/sections/Hero3/Hero3Graphql';
import { HERO4_GRAPHQL_QUERY } from '../components/sections/Hero4/Hero4Graphql';

export default function usePageData(slug) {
  const pageData = ref(null)
  const graphql = useStrapiGraphQL()

  onMounted(async () => {
    try {
      const result = await graphql(`
          query {
            pages {
              data {
                attributes {
                  slug
                  content {
                    __typename
                    ${HERO1_GRAPHQL_QUERY}
                    ${HERO2_GRAPHQL_QUERY}
                    ${HERO3_GRAPHQL_QUERY}
                    ${HERO4_GRAPHQL_QUERY}
                  }
                }
              }
            }
          }
      `)
      const pages = result.data.pages.data
      const page = pages.find(p => p.attributes.slug === slug)

      if (page) {
        pageData.value = page.attributes
      }
    } catch (error) {
      console.error(error)
    }
  })

  return pageData
}