<template>
  <div v-if="pageData && pageData.content">
    <div v-for="(component, index) in pageData.content" :key="index">
      <Hero1 v-if="component.__typename === 'ComponentHeroHero1'" :data="component" />
      <Hero2 v-if="component.__typename === 'ComponentHeroHero2'" :data="component" />
      <Hero3 v-if="component.__typename === 'ComponentHeroHero3'" :data="component" />
      <Hero4 v-if="component.__typename === 'ComponentHeroHero4'" :data="component" />
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Hero1 from '../components/sections/Hero1/Hero1.vue';
import Hero2 from '../components/sections/Hero2/Hero2.vue';
import Hero3 from '../components/sections/Hero3/Hero3.vue';
import Hero4 from '../components/sections/Hero4/Hero4.vue';

const route = useRoute()
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
        }
      }
    }
  }
}
    `)
    const pages = result.data.pages.data
    const page = pages.find(p => {
      return p.attributes.slug === '/' + route.params.slug;
    })
    if (page) {
      pageData.value = page.attributes
    }
  } catch (error) {
    console.error(error)
  }
})
</script>