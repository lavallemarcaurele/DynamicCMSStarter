import { HERO1_GRAPHQL_QUERY } from '../components/sections/Hero1/Hero1Graphql';
import { HERO2_GRAPHQL_QUERY } from '../components/sections/Hero2/Hero2Graphql';
import { HERO3_GRAPHQL_QUERY } from '../components/sections/Hero3/Hero3Graphql';
import { HERO4_GRAPHQL_QUERY } from '../components/sections/Hero4/Hero4Graphql';
import { HERO5_GRAPHQL_QUERY } from '../components/sections/Hero5/Hero5Graphql';
import { HERO6_GRAPHQL_QUERY } from '../components/sections/Hero6/Hero6Graphql';
import { SLIDERCARDS_GRAPHQL_QUERY } from '../components/sections/SliderCards/SliderCardsGraphql';
import { ADVANTAGES_GRAPHQL_QUERY } from '../components/sections/Advantages/AdvantagesGraphql';

export default function useArticleData(slug) {
  const articleData = ref(null)
  const graphql = useStrapiGraphQL()

  onMounted(async () => {
    try {
      const result = await graphql(`
          query {
            articles {
              data {
                attributes {
                  slug
                  content {
                    __typename
                    ${HERO1_GRAPHQL_QUERY}
                    ${HERO2_GRAPHQL_QUERY}
                    ${HERO3_GRAPHQL_QUERY}
                    ${HERO4_GRAPHQL_QUERY}
                    ${HERO5_GRAPHQL_QUERY}
                    ${HERO6_GRAPHQL_QUERY}
                    ${SLIDERCARDS_GRAPHQL_QUERY}
                    ${ADVANTAGES_GRAPHQL_QUERY}
                  }
                }
              }
            }
          }
      `)
      const articles = result.data.articles.data
      const article = articles.find(p => p.attributes.slug === slug)

      if (article) {
        articleData.value = article.attributes
      }
    } catch (error) {
      console.error(error)
    }
  })

  return articleData
}